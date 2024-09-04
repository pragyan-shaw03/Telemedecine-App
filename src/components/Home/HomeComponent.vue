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
    <!-- Call to Action Banner -->
    <section class="cta-banner text-center py-5 bg-primary text-white shadow-lg">
      <div class="container">
        <h2 class="fw-bold">Ready to Take Control of Your Health?</h2>
        <p class="mb-4">Book your appointment today and get the care you deserve.</p>
        <a href="/doctors" class="btn btn-light btn-lg">Search Doctors</a>
      </div>
    </section>

    <hr class="my-5" />
    <!-- Featured Doctors -->
    <featured-doctors></featured-doctors>

    <hr class="my-5" />
    <!-- Health Articles -->
    <health-articles></health-articles>

    <hr class="my-5" />
    <!-- Reviews -->
     <reviews-component></reviews-component>
    
  </div>
</template>

<script>
import FeaturedDoctors from "./FeaturedDoctors.vue";
import HealthArticles from "./HealthArticles.vue";
import ReviewsComponent from "./ReviewsComponent.vue";
import SearchComponent from "./SearchComponent.vue";
import ServicesComponent from "./ServicesComponent.vue";

export default {
  components: {
    ServicesComponent,
    SearchComponent,
    ReviewsComponent,
    FeaturedDoctors,
    HealthArticles
  },
};
</script>
