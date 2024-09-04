<template>
  <div class="container">
    <h2 class="text-center mb-4">People Reviews</h2>
    <div class="row">
      <div v-for="(review, i) in reviews" :key="i" class="col-md-4">
        <div class="card shadow-sm mb-4">
          <div class="card-body text-center shadow">
            <img
              :src="review.imageURL"
              class="rounded-circle mb-3"
              alt="Reviewer Image"
            />
            <h5 class="card-title">{{ review.name }}</h5>
            <div class="mb-3">
              <span class="text-warning"
                >&#9733;&#9733;&#9733;&#9733;&#9734;</span
              >
            </div>
            <p class="card-text">
              {{ review.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          imageURL:
            "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000&dpr=1",
          name: "John Doe",
          description:
            '"This service was outstanding! I highly recommend it to anyone looking for quality and reliability."',
        },
        {
          imageURL:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1000&h=100&dpr=1",
          name: "Alice Johnson",
          description:
            '"Fantastic experience! The team went above and beyond my expectations."',
        },
        {
          imageURL:
            "https://images.pexels.com/photos/713312/pexels-photo-713312.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000&dpr=1",
          name: "Jane Smith",
          description:
            '"Great service with a personal touch. I felt valued and appreciated throughout the entire process."',
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
    height: 100px;
    width: 100px;
    aspect-ratio: 1;
}
</style>