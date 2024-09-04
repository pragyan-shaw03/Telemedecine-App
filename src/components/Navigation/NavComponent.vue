<template>
  <div>
    <!-- Top Nav -->
     <top-navbar></top-navbar>
    <!-- Off canvas -->
    <off-canvas></off-canvas>
  </div>
</template>

<script>
import OffCanvas from './OffCanvas.vue';
import TopNavbar from './TopNavbar.vue';

export default {
  components: {
    OffCanvas,
    TopNavbar
  }
}
</script>
