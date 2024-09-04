<template>
  <div class="container text-center">
    <h2 class="mb-4">Our Services</h2>
    <div class="row justify-content-center">
      <div
        v-for="(service, i) in services"
        :key="i"
        class="col-md-3 shadow m-3"
      >
        <div class="services-icon mb-3">
          <i :class="service.icon"></i>
        </div>
        <h4>{{ service.title }}</h4>
        <p>{{ service.description }}</p>
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