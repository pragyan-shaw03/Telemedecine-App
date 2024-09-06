<template>
  <div class="container mx-auto px-4 py-12 bg-gray-100">
    <h2 class="text-4xl font-extrabold text-gray-900 mb-8 text-center">Our Services</h2>
    <div class="flex flex-wrap justify-center gap-8">
      <div
        v-for="(service, i) in services"
        :key="i"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        <div class="flex items-center justify-center mb-4 p-6 bg-blue-50 rounded-full">
          <i :class="service.icon" class="text-3xl text-blue-500"></i>
        </div>
        <h4 class="text-2xl font-semibold text-gray-800 mb-2">{{ service.title }}</h4>
        <p class="text-gray-600">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: "fas fa-stethoscope mt-3 fs-1",
          title: "Consultation",
          description: "Get professional advice from experienced doctors.",
        },
        {
          icon: "fas fa-pills mt-3 fs-1",
          title: "Medication",
          description:
            "Order medications and have them delivered to your home.",
        },
        {
          icon: "fas fa-ambulance mt-3 fs-1",
          title: "Emergency Services",
          description: "Get immediate assistance in case of emergencies.",
        },
      ],
    };
  },
};
</script>