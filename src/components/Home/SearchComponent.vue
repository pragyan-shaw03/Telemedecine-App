<template>
  <div class="desktop flex justify-center pt-5 mx-4">
    <form class="flex items-center w-full max-w-lg" role="search">
      <input
        class="form-input w-full rounded-full border-gray-300 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2 text-lg"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        class="btn bg-blue-500 text-white rounded-full px-3 ml-2 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="submit"
      >
        <i class="fa-solid fa-magnifying-glass text-xl"></i>
      </button>
    </form>
  </div>
</template>

<style scoped>
input:focus {
  outline: none;
  border-color: transparent;
}
input, button {
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.429);
}
.desktop {
  display: block;
}
@media (min-width: 500px) {
  .desktop {
    display:none !important; 
  }
}
</style>