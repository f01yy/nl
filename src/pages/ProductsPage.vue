<template>
  <div class="products-wrapper">
    <div class="container">
      <div class="products">
        <div>
          <div class="products__header">
            <button class="products__back">
              <img src="@/assets/arrow-back.svg" alt="back" />
            </button>
            <h1 class="products__title">{{ category?.name }}</h1>
          </div>

          <subcategories-list
            @subcategory-change="handleSubcategoryChange"
            :subcategories="subcategories"
            :selectedSubcategory="selectedSubcategory"
          />
        </div>

        <products-list :products="sortedProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import { getProducts } from '@/api.js';

import ProductsList from '@/components/ProductsList.vue';
import SubcategoriesList from '@/components/SubcategoriesList.vue';

export default {
  name: 'ProductsPage',

  components: {
    ProductsList,
    SubcategoriesList,
  },

  data() {
    return {
      products: [],
      subcategories: [],
      selectedSubcategory: null,
      category: null,
    };
  },

  methods: {
    handleSubcategoryChange(subcategory) {
      this.selectedSubcategory = subcategory;
    },
  },

  props: {
    cityId: Number,
    categories: Array,
  },

  computed: {
    sortedProducts() {
      if (this.selectedSubcategory) {
        const result = this.products.filter(
          (product) =>
            product.tags.findIndex(
              (tag) => tag.slug === this.selectedSubcategory.slug
            ) != -1
        );

        return result;
      }

      return this.products;
    },
  },

  watch: {},

  async created() {
    this.products = await getProducts(this.cityId, this.$route.params.slug);
    console.log(this.categories);
    this.subcategories = this.categories.find((category) => {
      return category.slug === this.$route.params.slug;
    }).children;

    this.category = this.categories.find(
      (tag) => tag.slug === this.$route.params.slug
    );
  },
};
</script>

<style scoped>
.products {
  padding: 35px 0;
  justify-content: center;
  display: grid;
  grid-template-columns: 240px 1fr;
}
.products__header {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.products__back {
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.products__title {
  font-weight: 600;
  font-size: 44px;
  line-height: 44px;
  color: #272727;
}
</style>
