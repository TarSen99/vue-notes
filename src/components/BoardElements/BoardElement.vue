<template>
  <div
    class="board-element"
    :class="{'board-element-selected': !isEmpty}"
    @click="handleClick"
  >
    <span v-if="counter && isEmpty">+</span>
    <board-element-content
      @submit="reset"
      v-else
      :title="options ? options.name : null"
    />
  </div>
</template>

<script>
  import BoardElementContent from './BoardElementContent';

  export default {
    name: 'BoardElement',
    components: {
      BoardElementContent,
    },
    props: {
      counter: {
        type: Boolean,
        default: false
      },
      submited: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object,
        default: null
      }
    },
    mounted() {
      if(this.submited) {
        this.isEmpty = false;
      }
    },
    methods: {
      reset() {
        if(this.counter) {
          this.isEmpty = true;
        }
      },
      handleClick() {
        if(!this.isEmpty) {
          return;
        }

        this.isEmpty = false;
      }
    },
    data() {
      return {
        isEmpty: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .board-element {
    padding: 10px;
    width: 200px;
    height: 200px;
    max-height: 200px;
    overflow-y: auto;
    transition: all 0.2s;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
/*
    background-color: #e49494;
*/
    background-color: #fff;
    opacity: 0.4;
    border-radius: 10px;

    &:hover {
      background-color: #505050;
      cursor: pointer;

      span {
        color: #fff;
      }
    }

    span {
      font-size: 70px;
      transition: all 0.2s;
    }
  }

  .board-element-selected {
    padding: 0 !important;
    align-items: flex-start;
    background-color: #da4c4c;
    opacity: 1;
    
    &:hover {
      background-color: #da4c4c;
    }
  }
</style>
