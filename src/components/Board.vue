<template>
  <div class="board">
    <h2>{{ id }}</h2>

    <div class="board-elements-container">
      <board-element
        submited
        :options="item"
        v-for="(item, key) in boardItems"
        :key="key"
      />

      <board-element
        counter
        :key="key"
      />
    </div>
  </div>
</template>

<script>
  import BoardElement from './BoardElements/BoardElement';
  import {mapActions, mapState, mapMutations} from 'vuex'

  export default {
    name: 'Board',
    components: {
      BoardElement
    },
    computed: {
      ...mapState('boards', {
        boardItems: state => state.boardItems,
      }),
      key() {
        return Object.keys(this.boardItems || {}).length;
      }
    },
    mounted() {
      this.setId(this.id);
      this.getBoardItemsList(this.id);
    },
    methods: {
      ...mapActions('boards', {
        getBoardItemsList: 'getBoardItemsList',
      }),
      ...mapMutations('boards', {
        setId: 'setId'
      }),
    },
    props: {
      id: {
        type: String,
      }
    }
  }
</script>

<style lang="scss" scoped>
  h2 {
    text-transform: capitalize;
  }

  .board {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }

  .board-elements-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
