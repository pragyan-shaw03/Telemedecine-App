<template>
  <div class="min-h-screen bg-gray-100">
    <search-component></search-component>

    <div class="p-6 md:p-8 lg:p-12">
      <!-- Find Doctors Section -->
      <section class="bg-gradient-to-r from-blue-50 to-blue-100 text-center py-16 px-6 md:px-12 lg:px-24 rounded-lg shadow-xl">
        <div class="container mx-auto">
          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Find the Best Doctors Near You
          </h1>
          <p class="text-lg md:text-xl text-gray-700 mb-8">
            Connect with top doctors and healthcare professionals for your needs.
          </p>
          <a
            href="#"
            class="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
            @click="bookAppointment"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      <!-- Services Section -->
      <hr class="my-10 border-gray-500" />
      <services-component></services-component>

      <!-- Call to Action Banner -->
      <hr class="my-10 border-gray-500" />
      <section class="bg-blue-700 text-white py-12 px-6 text-center rounded-lg shadow-lg">
        <div class="container mx-auto">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p class="text-lg md:text-xl mb-6">
            Book your appointment today and get the care you deserve.
          </p>
          <a
            href="/doctors"
            class="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Search Doctors
          </a>
        </div>
      </section>

      <!-- Featured Doctors Section -->
      <hr class="my-10 border-gray-500" />
      <featured-doctors></featured-doctors>

      <!-- Health Articles Section -->
      <hr class="my-10 border-gray-500" />
      <health-articles></health-articles>

      <!-- Reviews Section -->
      <hr class="my-10 border-gray-500" />
      <reviews-component></reviews-component>
    </div>
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
    HealthArticles,
  },
  methods: {
    bookAppointment() {
      this.$router.push({name: 'Doctors'});
    }
  }
};
</script>
