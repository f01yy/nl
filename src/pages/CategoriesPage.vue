<template>
  <section class="categories">
    <div class="container">
      <h1 class="categories__title">Категории товаров</h1>

      <categories-list :categories="categories" />
    </div>
  </section>
</template>

<script>
import CategoriesList from '@/components/CategoriesList.vue';

export default {
  name: 'CategoriesPage',

  components: {
    CategoriesList,
  },

  props: {
    categories: Array,
  },
};
</script>

<style scoped>
.categories__title {
  font-weight: 600;
  line-height: 44px;
  font-size: 44px;
  color: #272727;
  margin-bottom: 20px;
  margin-top: 35px;
}
@media screen and (max-width: 640px) {
  .categories__title {
    font-size: 30px;
  }
}
</style>
