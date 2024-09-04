<template>
  <ul class="nav flex-column">
    <li v-for="option, i in options" :key="i" class="nav-item side-nav-item shadow">
      <a class="nav-link text-dark" :href="option.route"
        ><i :class="option.icon"></i> {{ option.name }}</a
      >
    </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            options: [{name: 'Home', route: '/', icon: 'fa-solid fa-house me-2 text-muted'},
              {name: 'Doctors', route: '/doctors', icon: 'fa-solid fa-user-doctor me-2 text-muted'},
              {name: 'My Appointments', route: '/', icon: 'fa-solid fa-calendar-check me-2 text-muted'}, 
              {name: 'Medical History', route: '/', icon: 'fa-solid fa-book-medical me-2 text-muted'}, 
              {name: 'Login', route: '/login', icon: 'fa-solid fa-right-to-bracket me-2 text-muted'}, 
              {name: 'Register', route: '/register', icon: 'fa-solid fa-id-card me-2 text-muted'}
            ]
        }
    }
}
</script>


<style scoped>
.side-nav-item {
  background-color: white;
  margin: 0.5rem;
  border-radius: 0.5rem;
}
.nav-item:hover {
  transform: scale(1, 1.1);
  box-shadow: 2px 2px 8px black;
}
</style>