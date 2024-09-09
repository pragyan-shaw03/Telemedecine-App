<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-50">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <h2 class="text-3xl font-semibold text-center text-blue-600 mb-6">Create Account</h2>
      <form @submit.prevent="register">
        <!-- Full Name Input -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="fullName">Full Name</label>
          <input
            v-model="fullName"
            type="text"
            id="fullName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your full name"
          />
          <p v-if="fullNameError" class="text-red-500 text-xs mt-1">{{ fullNameError }}</p>
        </div>

        <!-- Email Input -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
          <p v-if="emailError" class="text-red-500 text-xs mt-1">{{ emailError }}</p>
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
          <p v-if="passwordError" class="text-red-500 text-xs mt-1">{{ passwordError }}</p>
        </div>

        <!-- Confirm Password Input -->
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword">Confirm Password</label>
          <input
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm your password"
          />
          <p v-if="confirmPasswordError" class="text-red-500 text-xs mt-1">{{ confirmPasswordError }}</p>
        </div>

        <!-- Register Button -->
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>

      <!-- Login Link -->
      <p class="text-center text-gray-600 text-xs mt-4">
        Already have an account?
        <router-link to="/login" class="text-blue-600 hover:text-blue-800">Log In</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      fullNameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
  },
  methods: {
    register() {
      // Clear previous errors
      this.fullNameError = "";
      this.emailError = "";
      this.passwordError = "";
      this.confirmPasswordError = "";

      // Basic form validation
      if (!this.fullName) {
        this.fullNameError = "Full name is required.";
      }

      if (!this.email) {
        this.emailError = "Email is required.";
      }

      if (!this.password) {
        this.passwordError = "Password is required.";
      }

      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = "Passwords do not match.";
      }

      if (!this.fullNameError && !this.emailError && !this.passwordError && !this.confirmPasswordError) {
        // Perform registration logic
        console.log("Registering with:", this.fullName, this.email, this.password, this.confirmPassword);
      }
    },
  },
};
</script>

<style scoped></style>
