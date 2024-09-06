<template>
  <div class="container mx-auto px-4 py-12">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
      People Reviews
    </h2>
    <div class="flex flex-wrap -mx-4">
      <div
        v-for="(review, i) in reviews"
        :key="i"
        class="w-full md:w-1/3 px-4 mb-8"
      >
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div class="p-6 text-center">
            <img
              :src="review.imageURL"
              class="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-2 border-blue-500"
              alt="Reviewer Image"
            />
            <h5 class="text-xl font-semibold text-gray-800 mb-2">
              {{ review.name }}
            </h5>
            <div class="mb-4">
              <span class="text-yellow-500">
                &#9733;&#9733;&#9733;&#9733;&#9734;
              </span>
            </div>
            <p class="text-gray-600">
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
            '"Fantastic experience! The team went above and beyond my expectations. I would recommend it to everyone."',
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