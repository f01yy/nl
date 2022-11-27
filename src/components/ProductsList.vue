<template>
  <div class="products__list">
    <product-item
      v-for="product in products"
      :product="product"
      :key="product.id"
    />
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: {
    ProductItem,
  },

  props: {
    products: Array,
  },
};
</script>

<style scoped>
.products__list {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 276px);
  gap: 24px;
  justify-content: center;
}
</style>
