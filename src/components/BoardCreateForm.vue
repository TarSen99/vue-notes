<template>
  <div>
    <button
      @click="handleButtonClick"
      class="button-template"
      :style="{'background-color': backgroundColor}"
    >
      {{ value }}
    </button>

    <form @submit.prevent class="submit-form" @submit="handleSubmit">
      <input
        class="submit-input"
        type="text"
        v-model="inputValue"
        :class="{'submit-input-active': showForm}"
        placeholder="Name..."
      >
    </form>
  </div>
</template>

<script>
  export default {
    name: 'BoardCreateForm',
    data() {
      return {
        inputValue: null,
        showForm: false,
      }
    },
    methods: {
      handleButtonClick() {
        if(!this.showForm) {
          this.inputValue = null;
        }

        this.showForm = !this.showForm;
      },
      handleSubmit() {
        this.$emit('submit', this.inputValue);
        this.showForm = false;
      }
    },
    props: {
      value: {
        type: String,
      },
      backgroundColor: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    display: inline-block;
  }

  .submit-input {
    width: 100%;
    border: none;
    outline: none;
    margin: 0;
    height: 0;
    max-height: 0;
    transition: all 0.2s;
    position: relative;
    top: -5px;
    padding: 0 5px;

    &-active {
      height: 26px;
      padding: 5px;
      max-height: initial;
      top: 0;
    }
  }

  .submit-form {
    margin: 0;
    padding: 0;
    display: flex;
    vertical-align: top;
    justify-content: center;
  }

  .button-template {
    outline: none;
    border: 1px solid #aeacb0;
    font-size: 16px;
    padding: 10px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    background-color: #67ac6d;
    border-radius: 2px;
    position: relative;
    z-index: 2;

    &:hover {
      background-color: #34773a;
    }
  }
</style>
