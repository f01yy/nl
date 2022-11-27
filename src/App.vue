<template>
  <div>
    <header class="header">
      <div class="container">
        <button @click="openModal" class="header__geo-btn">
          <img src="@/assets/geo-icon.svg" alt="" />
          <span class="header__location">{{ cityName }}</span>
        </button>

        <modal-window v-model="showModal">
          <cities-form @change-city="changeCity" />
        </modal-window>
      </div>
    </header>

    <router-view
      @set-categories="setCategories"
      :categories="categories.length > 0 ? categories : null"
      :cityId="cityId"
    />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';

import { getCategories } from '@/api.js';

import ModalWindow from './components/ModalWindow.vue';
import CitiesForm from './components/CitiesForm.vue';

export default {
  name: 'App',

  components: { ModalWindow, CitiesForm, RouterView },

  data() {
    return {
      cityId: 1,
      cityName: 'Новосибирск',
      country: 'ru',

      showModal: false,

      categories: [],
    };
  },

  watch: {
    cityId() {
      localStorage.setItem(
        'city',
        JSON.stringify({
          id: this.cityId,
          name: this.cityName,
        })
      );

      getCategories(this.cityId).then((cs) => {
        this.categories = cs.tags;
      });
    },

    cityName() {
      localStorage.setItem(
        'city',
        JSON.stringify({
          id: this.cityId,
          name: this.cityName,
        })
      );
    },
  },

  methods: {
    openModal() {
      this.showModal = true;
    },

    changeCity(city) {
      this.cityId = city.id;
      this.cityName = city.city;
      this.showModal = false;
    },

    setCategories(categories) {
      this.categories = categories;
    },
  },

  async created() {
    if (localStorage.getItem('city')) {
      const city = JSON.parse(localStorage.getItem('city'));
      this.cityId = city.id;
      this.cityName = city.name;
    }

    this.categories = (await getCategories(this.cityId)).tags;
  },
};
</script>

<style>
@import '@/assets/FuturaPT/stylesheet.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Futura PT';
  background-color: #f7f7f7;
}
.container {
  max-width: 1264px;
  margin: 0 auto;
  padding: 0 20px;
}
.btn {
  font-family: 'Futura PT';
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  border-radius: 24px;
  text-transform: uppercase;
  width: 174px;
  height: 48px;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.75px;
  cursor: pointer;
  color: #ffffff;
  background: linear-gradient(270deg, #ffa800 0%, #ff6f00 60.2%);
  border: none;
  position: relative;
  z-index: 0;
}
.btn_disabled {
  background: transparent;
  color: #acacac;
  border: 2px solid rgba(151, 151, 151, 0.3);
}
.btn:not(.btn_disabled)::after {
  z-index: -1;
  position: absolute;
  content: ' ';
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  height: 48px;
  width: 145px;
  background: linear-gradient(
    270deg,
    rgba(255, 168, 0, 0.6) 0%,
    rgba(255, 111, 0, 0.6) 100%
  );
  filter: blur(13.5914px);
}
.header {
  box-shadow: 0px 2px 4px rgba(39, 39, 39, 0.1);
  padding: 25px 0;
  background-color: #fff;
}
.header__geo-btn {
  background-color: transparent;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  height: fit-content;
}
.header__location {
  line-height: 24px;
  font-family: 'Futura PT';
  font-weight: 600;
  font-size: 15px;
  color: #272727;
}
</style>
