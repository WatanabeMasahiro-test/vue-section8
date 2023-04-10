<template>
    <div>
        <h5>My AppSecond.vue. second...</h5>
        <p>No.【{{ number }}】</p>
        <p>{{ tenNum }}</p>
        <p>{{ halfNumber }}</p>
        <p>{{ testNum }}</p>
        <button @click="increment">+1</button>
        <div style="background-color: aqua;">
            <button @click="onClickBtn">ボタン【@emit】</button>
        </div>
    </div>
</template>

<script>
// import ~~
export default {
  name: 'AppSecond',
//   props : ["tenNum"],
  data: () => ({
    number : 123,
    msg : "子コンポーネント",
    user: {
      firstName : "Jack",
      lastName  : "Donald",
    }
  }),
  props : {
    tenNum : {
        type        : Number,
        required    : true,
        default     : 777,
    },
    fiftyNum : {
        type        : Number,
        // required    : true,
        default     : 111,
    },
  },
  computed: {
    halfNumber() {
        return this.tenNum / 2;
    },
    testNum() {
        return this.fiftyNum;
    },
    onClickBtn() {
        return this.$emit("my-click", this.msg);
    },
  },
  methods: {
    increment() {
      this.number++;
    }
  }
}
</script>

<style scoped>
  div {
    border : 1px solid red;
  }
</style>