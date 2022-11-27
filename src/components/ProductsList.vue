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
  display: grid;
  grid-template-columns: repeat(auto-fill, 276px);
  gap: 24px;
  justify-content: center;
}

@media screen and (max-width: 1024px) {
  .products__list {
    grid-template-columns: repeat(auto-fill, 200px);
  }
}
</style>
