<template>
  <div class="products__item">
    <div class="products__img-wrapper">
      <img :src="product.main_image_thumb_300" class="products__img" />
    </div>
    <div class="products__info">
      <p class="products__category">{{ product.category.name }}</p>
      <p class="products__name">{{ product.present_name }}</p>
      <p class="products__desc">{{ product.comment_name }}</p>
      <p class="products__price">{{ product.price }} ₽</p>
    </div>
    <button
      class="btn products__buy"
      :class="{
        btn_disabled: !(product.allowed && product.available),
      }"
    >
      {{ product.allowed && product.available ? 'В корзину' : 'Нет в наличии' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.products__item {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.products__info {
  padding: 0 24px;
  text-align: center;
}
.products__category {
  margin-top: 6px;
  color: #979797;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 4px;
}
.products__name {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #272727;
  margin-bottom: 9px;
}
.products__desc {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #272727;
  margin-bottom: 14px;
}
.products__price {
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  color: #272727;
}
.products__buy {
  text-transform: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 16px auto 18px auto;
  width: 212px;
  height: 45px;
}
.products__buy::after {
  width: 194px;
}
.products__item {
  background-color: #fff;
}
.products__img-wrapper {
  width: 276px;
  height: 276px;
}
.products__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
