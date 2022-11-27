<template>
  <div class="products-wrapper">
    <div class="container">
      <div class="products">
        <div class="products__header">
          <router-link :to="'/'" class="products__back">
            <img src="@/assets/arrow-back.svg" alt="back" />
          </router-link>
          <h1 class="products__title">{{ category?.name }}</h1>
        </div>

        <div class="products__body">
          <subcategories-list
            @subcategory-change="handleSubcategoryChange"
            :subcategories="subcategories"
            :selectedSubcategory="selectedSubcategory"
          />

          <products-list :products="sortedProducts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

import { getProducts, getCategories } from '@/api.js';

import ProductsList from '@/components/ProductsList.vue';
import SubcategoriesList from '@/components/SubcategoriesList.vue';

export default {
  name: 'ProductsPage',

  components: {
    RouterLink,
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

      if (subcategory) {
        this.$router.push({
          path: `/category/${this.$route.params.slug}/${subcategory.slug}`,
        });
      } else {
        this.$router.push({ path: `/category/${this.$route.params.slug}/` });
      }
    },
  },

  props: {
    cityId: Number,
    categories: Array,
  },

  computed: {
    sortedProducts() {
      if (this.selectedSubcategory) {
        return this.products.filter(
          (product) =>
            product.tags.findIndex(
              (tag) => tag.slug === this.selectedSubcategory.slug
            ) != -1
        );
      }

      return this.products;
    },
  },

  watch: {},

  async created() {
    this.products = await getProducts(this.cityId, this.$route.params.slug);
    console.log(this.categories);

    let categories, subcategories;

    if (this.categories) {
      this.subcategories = this.categories.find((category) => {
        return category.slug === this.$route.params.slug;
      }).children;

      this.category = this.categories.find(
        (tag) => tag.slug === this.$route.params.slug
      );
    } else {
      console.log(1);
      categories = (await getCategories(this.cityId)).tags;
      console.log(2);
      this.$emit('set-categories', categories);

      subcategories = categories.find((category) => {
        return category.slug === this.$route.params.slug;
      }).children;
      this.subcategories = subcategories;

      this.category = categories.find(
        (tag) => tag.slug === this.$route.params.slug
      );
    }

    if (!this.$route.params.subslug) {
      this.selectedSubcategory = null;
    } else {
      this.selectedSubcategory = this.subcategories.find(
        (subcategory) => subcategory.slug === this.$route.params.subslug
      );
    }
  },
};
</script>

<style scoped>
.products {
  padding: 35px 0;
}
.products__body {
  justify-content: center;
  display: grid;
  grid-template-columns: 240px 1fr;
  column-gap: 20px;
}
.products__header {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.products__back {
  text-decoration: none;
  cursor: pointer;
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

@media screen and (max-width: 1024px) {
  .products__body {
    display: block;
  }
  .products__title {
    font-size: 30px;
  }
}
</style>
