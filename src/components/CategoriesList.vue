<template>
  <div class="categories__list">
    <category-item
      v-for="category in categories"
      @click="$router.push(`/category/${category.slug}`)"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';

export default {
  props: {
    categories: Array,
  },

  components: { CategoryItem },
};
</script>

<style scoped>
.categories__list {
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fill, 288px);
  gap: 22px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 40px;
}
</style>
