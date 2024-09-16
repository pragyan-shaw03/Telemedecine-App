<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-50">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <h2 class="text-3xl font-semibold text-center text-blue-600 mb-6">Welcome Back</h2>
      <form @submit.prevent="login">
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
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
          <p v-if="passwordError" class="text-red-500 text-xs mt-1">{{ passwordError }}</p>
        </div>

        <!-- Login Button -->
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>

      <!-- Signup Link -->
      <p class="text-center text-gray-600 text-xs mt-4">
        Don't have an account?
        <router-link to="/register" class="text-blue-600 hover:text-blue-800">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    login() {
      // Clear previous errors
      this.emailError = "";
      this.passwordError = "";

      // Basic form validation
      if (!this.email) {
        this.emailError = "Email is required.";
        setTimeout(()=> {
          this.emailError="";
        }, 1000);
      }

      if (!this.password) {
        this.passwordError = "Password is required.";
        setTimeout(()=> {
          this.passwordError="";
        }, 1000);
      }

      if (!this.emailError && !this.passwordError) {
        // Perform login logic
        this.$store.commit('login', {
          name: this.email,
          token: 'someVal'
        })
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped></style>
