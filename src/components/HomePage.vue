<template>
  <div class="home-page-container">
    <board-create-form
      value='Create new board'
      @submit="addNewBoard"
    />

    <a href="/hello" v-reactive-link>Hello world</a>
    <board-list />
  </div>
</template>

<script>
  import BoardCreateForm from './BoardCreateForm'
  import BoardList from './BoardList'
  import reactiveLink from './../directives/reactive_link';
  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'HomePage',
    components: {
      BoardCreateForm,
      BoardList
    },
    directives: {
      reactiveLink: reactiveLink,
    },
    computed: {
      ...mapState('boards', {
        boards: state => state.boards
      }),
    },
    methods: {
      ...mapActions('boards', {
        addNewBoard: 'addNewBoard',
        getBoardsList: 'getBoardsList'
      })
    },
    mounted() {
      this.getBoardsList();
    }
  }
</script>

<style lang="scss" scoped>
  .home-page-container {
    margin-top: 50px;
  }
</style>
