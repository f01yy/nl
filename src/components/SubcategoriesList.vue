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
.products__subcategory {
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
</style>
