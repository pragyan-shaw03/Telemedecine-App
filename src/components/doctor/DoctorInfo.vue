<template>
  <div class="container mx-auto my-8 px-4">
    <div class="flex justify-center">
      <div class="max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-blue-500 to-teal-500 p-4 text-center">
          <img
            :src="doctor.imageUrl"
            class="w-36 h-36 mx-auto rounded-full border-4 border-white"
            alt="Doctor Image"
          />
        </div>
        <div class="p-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">{{ doctor.name }}</h2>
          <h5 class="text-xl text-gray-600 mb-4">{{ doctor.expertise }}</h5>
          <p class="text-gray-700 mb-6">
            <span class="font-semibold">Clinic:</span> {{ doctor.clinicInfo }}<br />
            <span class="font-semibold">Address:</span> {{ doctor.address }}
          </p>
          <router-link 
            to="/"
            class="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Book Appointment
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        doctor: null
      }
    },
    computed: {
      ...mapGetters(['getDoctors'])
    },
    created() {
      this.doctor = this.getDoctors[this.$route.params.id];
    }
  }
  </script>
  
  <style scoped>
  .card {
    border-radius: 15px; /* Rounded corners for the card */
  }
  
  .card-img-top {
    border: 5px solid #fff; /* Optional: white border around the image */
  }
  </style>
  