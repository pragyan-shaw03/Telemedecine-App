<template>
    <nav class="navbar navbar-expand-lg bg-primary fixed-top">
      <div class="container-fluid">
        <a
          class="text-decoration-none text-dark"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <button class="btn btn-outline" href="#"><i class="fa-solid fa-bars text-light"></i></button>
          <a class="navbar-brand" href="#"><i class="fa-solid fa-hospital-user mx-2 text-light"></i> <span class="fw-bold text-light">TeleMed</span></a>
          </a
        >
        <div class="m-auto w-50 desktop">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 px-3 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-light rounded-circle" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
    </nav>
</template>

<style scoped>
.desktop {
  display: contents;
}
@media (max-width: 500px) {
  .desktop {
    display:none;
  }
}
</style>