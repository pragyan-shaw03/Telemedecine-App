<template>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <div class="card">
            <img
              :src="doctor.imageUrl"
              class="card-img-top rounded-circle mx-auto d-block"
              alt="Doctor Image"
              style="width: 150px; height: 150px;"
            />
            <div class="card-body">
              <h2 class="card-title">{{ doctor.name }}</h2>
              <h5 class="card-subtitle mb-2 text-muted">{{ doctor.expertise }}</h5>
              <p class="card-text">
                <strong>Clinic:</strong> {{ doctor.clinicInfo }}<br />
                <strong>Address:</strong> {{ doctor.address }}
              </p>
              <a href="#" class="btn btn-primary">Book Appointment</a>
            </div>
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
  