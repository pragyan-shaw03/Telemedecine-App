<template>
  <nav-component></nav-component>
  <router-view></router-view>
  <footer-component></footer-component>
</template>

<script>
import { mapActions } from 'vuex';

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

  watch: {
    widthSize(newValue) {
      if (newValue > 600) {
        this.updateDesktopView(true);
      } else {
        this.updateDesktopView(false);
      }
    },
  },

  beforeMount() {
    window.addEventListener('resize', () => {
      this.widthSize = window.innerWidth;
    });
  },

  methods: {
    ...mapActions(['updateDesktopView']),
  }
}
</script>

<style>
body {
  padding-top: 56px;
}
</style>