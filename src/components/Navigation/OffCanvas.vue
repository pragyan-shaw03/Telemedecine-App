<template>
  <div
    class="offcanvas offcanvas-start bg-primary text-white"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
        <i class="fa-solid fa-hospital-user mx-2"></i>
        <span class="fw-bold">TeleMed</span>
      </h5>
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <!-- Profile Info -->
      <profile-info></profile-info>

      <!-- Line Break -->
      <hr class="bg-light" />

      <!-- Navigation Options -->
      <nav-options></nav-options>
    </div>
  </div>
</template>

<script>
import ProfileInfo from './ProfileInfo.vue';
import NavOptions from './NavOptions.vue';

export default {
    components: {
        ProfileInfo,
        NavOptions
    }
}
</script>
