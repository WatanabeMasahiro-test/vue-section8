<template>
  <AppHeader></AppHeader>
  <button @click="currentComponent = 'AppFouth'">AppFouth</button>
  <button @click="currentComponent = 'AppFouth2'">AppFouth2</button>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
    <h1>ここはApp.Vue</h1>
    <p>{{ msg_f(msg) }}</p>
    <AppSecond :ten-num="tenNum" :fifty-Num="fiftyNum" v-on:my-click="msg_f" v-slot="defaultSlotProps">
       <p>{{ defaultSlotProps }}</p>
    </AppSecond>
    <AppThird eight-num="8">
      <!-- <template v-slot:[title]></template> -->
      <div style="background-color:yellow;">デフォルトSLOTに表示されるか確認</div>
      <!-- <template v-slot:default="defaultSlotProps2">
        <p>{{ defaultSlotProps2 }}</p>
      </template> -->
      <template #title="titleSlotProps">
        <h1>SLOTのテスト</h1>
        <h2>{{ titleSlotProps.user.firstName }}<span>{{ titleSlotProps.user.lastName }}</span></h2>
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
import AppFouth from './components/AppFouth.vue'
import AppFouth2 from './components/AppFouth2.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppFouth,
    AppFouth2,
  },
  data: () => ({
    msg      : 'App.vue MSG',
    tenNum   : 10,
    fiftyNum : 50,
    slotTestNumber : 77777,
    title    : "タイトルです",
    currentComponent: "AppFouth",
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
