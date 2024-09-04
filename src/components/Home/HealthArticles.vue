<template>
  <section class="health-articles py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5">Health Articles & Tips</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card shadow-sm">
            <img
              src="https://via.placeholder.com/350x150"
              class="card-img-top"
              alt="Article Image"
            />
            <div class="card-body">
              <h5 class="card-title">How to Manage Diabetes</h5>
              <p class="card-text">
                Learn how to control your blood sugar levels.
              </p>
              <a href="#" class="btn btn-link">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm">
            <img
              src="https://via.placeholder.com/350x150"
              class="card-img-top"
              alt="Article Image"
            />
            <div class="card-body">
              <h5 class="card-title">Best Practices for a Healthy Heart</h5>
              <p class="card-text">
                Follow these tips to keep your heart healthy.
              </p>
              <a href="#" class="btn btn-link">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm">
            <img
              src="https://via.placeholder.com/350x150"
              class="card-img-top"
              alt="Article Image"
            />
            <div class="card-body">
              <h5 class="card-title">Understanding Mental Health</h5>
              <p class="card-text">
                Mental health is just as important as physical health.
              </p>
              <a href="#" class="btn btn-link">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.health-articles .card {
  border: none;
  transition: transform 0.3s;
}

.health-articles .card:hover {
  transform: translateY(-10px);
}
</style>