<template>
  <div class="boards-container">
    <router-link :to="{path: `board/${item.name}`}" class="board-element" v-for="item in list">
      <h3>
        {{ item.name }}
      </h3>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'BoardList',
    computed: {
      ...mapState('boards', {
        list: state => state.boards,
      })
    }
  }
</script>

<style lang="scss" scoped>
  .boards-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 50px;
  }

  .board-element {
    height: 150px;
    width: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    border-radius: 5px;
    background-color: #e49494;
    color: #fff;
    margin: 15px;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    
    &:hover {
      background-color: #cb7f7f;
      transform: scale(1.1);
    }

    h3 {
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
      margin-top: 10px;
      border-bottom: 1px solid #fff;
      font-family: 'Work Sans', sans-serif;
    }
  }
</style>
