<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4 shadow">
          <h2 class="text-center mb-4">Login</h2>
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
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
                placeholder="Create a password"
                required
              />
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="dropdownCheck"
                />
                <label class="form-check-label" for="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-outline-primary">
                Login
              </button>
            </div>
          </form>
          <p class="text-center mt-3">
            New around here?
            <a href="/register" class="text-decoration-none">Register</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>