<template>
  <div>
    <p>AppFouth</p>
    <input>
  </div>
</template>


<script>
// import ~~
export default {
  name: 'AppFouth',
  data: () => ({
    // user: {
    //   firstName : "Jack",
    //   lastName  : "Donald",
    // }
  }),
  // props : ["eightNum"],
  deactivated() {
    console.log("deactivated");
    alert("deactivatedです");
  },
  activated() {
    console.log("activated");
    alert("activatedです");
  },
}
</script>

<style scoped>

</style>