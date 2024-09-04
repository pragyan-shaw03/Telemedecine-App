<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4 shadow">
          <h2 class="text-center mb-4">Register</h2>
          <form @submit="handleSubmit">
            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="username"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                placeholder="Create a password"
                required
              />
            </div>
            <div class="mb-3">
              <label for="confirm-password" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                v-model="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-outline-primary">
                Register
              </button>
            </div>
          </form>
          <p class="text-center mt-3">
            Already have an account?
            <a href="/login" class="text-decoration-none">Login</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.$router.push("/");
    },
  },
};
</script>