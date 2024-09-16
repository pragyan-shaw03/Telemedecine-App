<template>
  <div class="mb-3">
    <h6 class="text-light">Profile Info</h6>
    <p class="text-light">Name: {{getUser? getUser.name : ''}}</p>
    <p class="text-light">Email: </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getUser']),
  }
}
</script>