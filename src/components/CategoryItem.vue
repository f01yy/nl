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
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.categories__item {
  cursor: pointer;
  width: 288px;
  height: 152px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.categories__name {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
}
@media screen and (max-width: 640px) {
  .categories__name {
    font-size: 20px;
  }
}
</style>
