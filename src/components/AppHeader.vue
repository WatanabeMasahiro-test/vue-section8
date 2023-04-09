<template>
    <header>My AppHeader.vue. header...</header>
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