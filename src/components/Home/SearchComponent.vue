<template>
  <div
    class="desktop d-flex justify-content-center mt-4 mx-4"
  >
    <form class="d-flex" role="search">
      <input
        class="form-control me-2 rounded-pill"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-primary rounded-circle" type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  </div>
</template>

<style scoped>
input, button {
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.429);
}
.desktop {
  display: contents;
}
@media (min-width: 500px) {
  .desktop {
    display:none !important; 
  }
}
</style>