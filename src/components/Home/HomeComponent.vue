<template>
  <search-component></search-component>
  <div class="p-5">
    <section class="hero-section text-center shadow rounded p-2">
      <div class="container">
        <h1 class="display-4">Find the Best Doctors Near You</h1>
        <p class="lead">
          Connect with top doctors and healthcare professionals for your needs.
        </p>
        <a href="" class="btn btn-primary btn-lg">Book an Appointment</a>
      </div>
    </section>

    <hr class="my-5" />
    <!-- Services Section -->
    <services-component></services-component>

    <hr class="my-5" />
    <!-- Reviews -->
     <reviews-component></reviews-component>
    
  </div>
</template>

<script>
import ReviewsComponent from "./ReviewsComponent.vue";
import SearchComponent from "./SearchComponent.vue";
import ServicesComponent from "./ServicesComponent.vue";

export default {
  components: {
    ServicesComponent,
    SearchComponent,
    ReviewsComponent
  },
};
</script>
