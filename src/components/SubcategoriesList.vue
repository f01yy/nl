<template>
  <div class="products__subcategories-wrapper">
    <div v-if="subcategories.length > 1" class="products__subcategories">
      <div
        @click="$emit('subcategory-change', null)"
        :class="{
          products__subcategory_active: !selectedSubcategory,
        }"
        class="products__subcategory"
      >
        Все продукты
      </div>

      <div
        v-for="subcategory in subcategories"
        :key="subcategory.id"
        @click="$emit('subcategory-change', subcategory)"
        :class="{
          products__subcategory_active:
            selectedSubcategory?.slug === subcategory.slug,
        }"
        class="products__subcategory"
      >
        {{ subcategory.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    subcategories: Array,
    selectedSubcategory: Object,
  },

  emits: {
    'subcategory-change': null,
  },

  methods: {},
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.products__subcategory {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  height: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #202648;
  padding: 10px 12px;
  border-bottom: 1px solid #e9eef3;
}
.products__subcategory_active {
  background: #e9eef3;
}
@media screen and (max-width: 1024px) {
  .products__subcategories-wrapper {
    margin-bottom: 20px;
  }
  .products__subcategories {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    gap: 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .products__subcategory {
    border-bottom: 2px solid #b6c9dc;
  }
}
</style>
