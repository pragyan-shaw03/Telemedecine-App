<template>
  <div class="card text-center shadow mx-auto my-4" style="width: auto; max-width: 40rem;">
    <div class="card-header">
      {{ name }}
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <a href="#" class="btn btn-primary" @click="this.$router.push({ name: 'DoctorInfo', params: { id: this.id } })">More Info...</a>
    </div>
    <div class="card-footer text-body-secondary">
    Expertise
  </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
        type: Number,
        required: true,
    },
    name: {
      type: String,
      required: true,
    }
  },
};
</script>