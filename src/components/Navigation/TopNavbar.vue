<template>
  <nav class="bg-app-blue fixed top-0 inset-x-0 z-50 shadow-md">
    <div class="px-4 py-3 flex items-center justify-between">
      <!-- Logo and Brand -->
      <div class="flex items-center space-x-4">
        <!-- Menu Button -->
        <button
          class="text-white text-xl p-2 hover:bg-blue-700 rounded-md focus:outline-none"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <!-- Logo -->
        <a class="flex items-center text-white text-xl font-bold" href="#">
          <img src="https://via.placeholder.com/40" alt="Logo" class="w-10 h-10 mr-2" />
          <span>TeleMed</span>
        </a>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center space-x-6">
        <a href="#" class="text-white hover:text-gray-300">Home</a>
        <a href="#" class="text-white hover:text-gray-300">About</a>
        <a href="#" class="text-white hover:text-gray-300">Services</a>
        <a href="#" class="text-white hover:text-gray-300">Contact</a>
      </div>

      <!-- Search Form -->
      <div class="hidden md:flex items-center space-x-4 w-1/3">
        <form class="flex items-center w-full">
          <input
            class="form-control px-4 py-2 rounded-full border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="ml-2 bg-white text-blue-600 p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 768px) {
  .hidden {
    display: none;
  }
}
</style>