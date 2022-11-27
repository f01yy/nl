<template>
  <div class="categories__item">
    <p class="categories__name" :style="`color: ${category.text_color}`">
      {{ category.name }}
    </p>
    <img :src="category.image" class="categories__bg" :alt="category.name" />
  </div>
</template>

<script>
export default {
  date() {},
  props: {
    category: Object,
  },
};
</script>

<style scoped>
.categories__item {
  cursor: pointer;
  width: 288px;
  height: 152px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.categories__name {
  position: absolute;
  top: 20px;
  left: 20px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
}
</style>
