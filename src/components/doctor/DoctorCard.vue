<template>
  <div class="max-w-sm mx-auto my-6 bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 text-center">
      <h2 class="text-2xl font-bold">{{ name }}</h2>
    </div>
    <div class="p-6">
      <h5 class="text-xl font-semibold mb-2">Special title treatment</h5>
      <p class="text-gray-700 mb-4">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <router-link 
        :to="{ name: 'DoctorInfo', params: { id: this.id } }"
        class="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        More Info...
      </router-link>
    </div>
    <div class="bg-gray-100 p-4 text-center">
      <p class="text-gray-600">Expertise</p>
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