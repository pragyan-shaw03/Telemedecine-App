<template>
  <!-- Featured Doctors -->
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-extrabold text-gray-800 mb-8 text-center">Top Doctors</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="doctor in doctors"
          :key="doctor.id"
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
        >
          <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              :src="doctor.image"
              alt="Doctor Image"
              class="w-24 h-24 mx-auto mt-6 rounded-full border border-gray-200"
            />
            <div class="p-6 text-center">
              <h6 class="text-xl font-semibold text-gray-900 mb-2">{{ doctor.name }}</h6>
              <p class="text-gray-600 mb-4">{{ doctor.specialty }}</p>
              <router-link
                :to="{ name: 'DoctorInfo', params: { id: doctor.id } }"
                class="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                Book Appointment
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      doctors: [
        { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', image: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatologist', image: 'https://via.placeholder.com/100' },
        { id: 3, name: 'Dr. Emily White', specialty: 'Pediatrician', image: 'https://via.placeholder.com/100' },
      ]
    };
  }
}
</script>
