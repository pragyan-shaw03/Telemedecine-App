<template>
  <nav-component></nav-component>
  <router-view></router-view>
  <footer-component></footer-component>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import NavComponent from './components/Navigation/NavComponent.vue';

export default {
  
  data() {
    return {
      widthSize: window.innerWidth,
    }
  },

  components: {
    NavComponent,
    FooterComponent
  },
}
</script>

<style>
body {
  padding-top: 56px;
}
</style>