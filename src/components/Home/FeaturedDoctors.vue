<template>
  <!-- Featured Doctors -->
  <section class="featured-doctors py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">Top Doctors</h2>
      <div class="row justify-content-center">
        <div class="col-md-3 mb-3">
          <div class="card shadow" style="max-width: 250px">
            <img
              src="https://via.placeholder.com/100"
              class="card-img-top mx-auto mt-3"
              alt="Doctor Image"
              style="width: 100px; height: 100px; border-radius: 50%"
            />
            <div class="card-body text-center">
              <h6 class="card-title">Dr. John Doe</h6>
              <p class="card-text text-muted">Cardiologist</p>
              <router-link
                :to="{ name: 'DoctorInfo', params: { id: 1 } }"
                class="btn btn-sm btn-primary"
                >Book Appointment</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card shadow" style="max-width: 250px">
            <img
              src="https://via.placeholder.com/100"
              class="card-img-top mx-auto mt-3"
              alt="Doctor Image"
              style="width: 100px; height: 100px; border-radius: 50%"
            />
            <div class="card-body text-center">
              <h6 class="card-title">Dr. Jane Smith</h6>
              <p class="card-text text-muted">Dermatologist</p>
              <router-link
                :to="{ name: 'DoctorInfo', params: { id: 2 } }"
                class="btn btn-sm btn-primary"
                >Book Appointment</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card shadow" style="max-width: 250px">
            <img
              src="https://via.placeholder.com/100"
              class="card-img-top mx-auto mt-3"
              alt="Doctor Image"
              style="width: 100px; height: 100px; border-radius: 50%"
            />
            <div class="card-body text-center">
              <h6 class="card-title">Dr. Emily White</h6>
              <p class="card-text text-muted">Pediatrician</p>
              <router-link
                :to="{ name: 'DoctorInfo', params: { id: 3 } }"
                class="btn btn-sm btn-primary"
                >Book Appointment</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card shadow" style="max-width: 250px">
            <img
              src="https://via.placeholder.com/100"
              class="card-img-top mx-auto mt-3"
              alt="Doctor Image"
              style="width: 100px; height: 100px; border-radius: 50%"
            />
            <div class="card-body text-center">
              <h6 class="card-title">Dr. Emily White</h6>
              <p class="card-text text-muted">Pediatrician</p>
              <router-link
                :to="{ name: 'DoctorInfo', params: { id: 3 } }"
                class="btn btn-sm btn-primary"
                >Book Appointment</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-doctors .card {
  border: none;
  transition: transform 0.3s;
}

.featured-doctors .card:hover {
  transform: translateY(-10px);
}
</style>