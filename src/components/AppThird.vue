<template>
    <div>My AppThird.vue. third...</div>
    <p>{{ eightNum }}</p>
      <slot></slot>
      <slot>
        <div>
          <h2>デフォルトのテキスト</h2>
        </div>
      </slot>
      <hr>
      <slot name="title" v-bind:user="user">デフォルトのタイトル</slot>
      <hr style="background-color:red; height: 1px;">
      <hr style="background-color:brown; height: 1px;">
      <slot name="number">デフォルトのナンバー</slot>
</template>

<script>
// import ~~
export default {
  name: 'AppThird',
  data: () => ({
    user: {
      firstName : "Jack",
      lastName  : "Donald",
    }
  }),
  props : ["eightNum"],
}
</script>

<style scoped>
  p {
    color :red;
  }
</style>