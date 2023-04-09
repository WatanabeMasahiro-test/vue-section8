<template>
  <AppHeader></AppHeader>
  <!-- <div class="container"> -->
    <h1>ここはApp.Vue</h1>
    <p>{{ msg_f(msg) }}</p>
    <AppSecond :ten-num="tenNum" :fifty-Num="fiftyNum" v-on:my-click="msg_f"></AppSecond>
    <AppThird eight-num="8">
      <div style="background-color:yellow;">デフォルトSLOTに表示されるか確認</div>
      <template v-slot:title>
        <h1>SLOTのテスト</h1>
      </template>
      <template v-slot:number>
        <p>{{ slotTestNumber }}</p>
      </template>
    </AppThird>
  <!-- </div> -->
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  data: () => ({
    msg     : 'App.vue MSG',
    tenNum  : 10,
    fiftyNum : 50,
    slotTestNumber : 77777,
  }),
  methods: {
    msg_f(value) {
      if(value == "子コンポーネント") {
        this.msg = value
      }
      return this.msg;
    },
  }
}
</script>

<script setup lang="ts">

</script>

<style>
/* p {
  color: blue;
} */

#app {
  background-color: beige;
}
</style>
