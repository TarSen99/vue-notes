<template>
  <div class="board-element-content">
    <form @submit.prevent="submit" class="board-element-form">
      <input
        type="text"
        placeholder="Type a title..."
        :class="{'input-submited': submited}"
        :readonly="submited"
        v-model="name"
      >

      <div class="main-content">
        <span>+</span>
      </div>
    </form>
  </div>
</template>

<script>
  import Task from './Task';
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'BoardElementContent',
    props: {
      title: {
        type: String,
        default: null,
      }
    },
    mounted() {
      if(this.title !== null && this.title !== undefined) {
        this.name = this.title;
        this.submited = true;
      }
    },
    computed: {
      ...mapState('boards', {
        id: state => state.id
      })
    },
    methods: {
      ...mapActions('boards', {
        addNewBoardItem: 'addNewBoardItem',
        getBoardItemsList: 'getBoardItemsList',
      }),
      submit() {
        this.addNewBoardItem({
          id: this.id,
          boardName: this.name,
          boardItems: [],
        });

        this.submited = true;
        this.$emit('submit')
      }
    },
    data() {
      return {
        submited: false,
        name: null,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-content {
    opacity: 0.4;
    width: 100%;
    height: 175px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    transition: all 0.2s;

    span {
      opacity: 0;
    }

    &:hover {
      background-color: #fff;

      span {
        opacity: 1;
      }
    }
  }
  .board-element-content {
    width: 100%;
    height: 100%;

    input {
      width: 100%;
      border: none;
      outline: none;
      height: 30px;
      padding-left: 5px;
      font-weight: 600;
      text-align: center;
      font-size: 18px;

      &::placeholder {
        font-weight: 200;
        font-size: 14px;
      }
    }

    .input-submited {
      background-color: #7a4141;
      opacity: 1;
      color: #fff;
      text-transform: uppercase;
      border-bottom: 1px solid #fff;
    }

    span {
      font-size: 70px;
      transition: all 0.2s;
    }

    .board-element-form {
      width: 100%;
      min-height: 100%;
      margin-top: -2px;
    }
  }
</style>
