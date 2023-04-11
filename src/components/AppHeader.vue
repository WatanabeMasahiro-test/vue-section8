<template>
    <header>My AppHeader.vue. header...</header>
    <h3>はじめまして</h3>
    <AppHeaderNavbar></AppHeaderNavbar>
</template>

<script>
import AppHeaderNavbar from './AppHeaderNavbar.vue'
export default {
  name: 'AppHeader',
  components: {
    AppHeaderNavbar
  },
}
</script>