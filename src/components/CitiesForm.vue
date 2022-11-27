<template>
  <form @submit.prevent="handleClick" class="city-form">
    <p class="city-form__title">Выбор населённого пункта:</p>
    <div class="city-form__body">
      <div class="city-form__search">
        <div class="city-form__input-wrapper">
          <input
            v-model="term"
            :class="{
              extended:
                this.term.length > 2 &&
                this.citiesOptions.length &&
                !canConfirm,
            }"
            class="city-form__input"
            type="text"
            placeholder="Например, Санкт-петербург"
          />
          <button @click="setTerm('')" type="reset" class="city-form__clear">
            <img class="city-form__clear-img" src="@/assets/close-icon.svg" />
          </button>
        </div>
        <div
          v-if="term.length > 2 && citiesOptions.length && !canConfirm"
          class="city-form__list"
        >
          <div class="city-form__separator"></div>
          <ul>
            <li
              v-for="city in citiesOptions.slice(0, 5)"
              @click="chooseCity(city)"
              :key="city.id"
              class="city-form__item"
            >
              {{ city.label }}
            </li>
          </ul>
        </div>
      </div>
      <button
        :disabled="!canConfirm"
        :class="{
          btn_disabled: !canConfirm,
        }"
        class="btn city-form__btn"
      >
        Подтвердить
      </button>
    </div>
  </form>
</template>

<script>
import { getCities } from '@/api.js';

export default {
  data() {
    return {
      term: '',
      citiesOptions: [],
      canConfirm: false,
      chosenCity: {},
    };
  },

  methods: {
    setTerm(str) {
      this.term = str;
    },

    handleClick() {
      this.$emit('change-city', this.chosenCity);
    },

    chooseCity(city) {
      this.chosenCity = city;
      this.setTerm(city.label);
      this.$nextTick(() => {
        this.canConfirm = true;
      });
    },
  },

  watch: {
    async term() {
      this.canConfirm = false;

      if (this.term.length > 2) {
        this.citiesOptions = await getCities(this.term, this.country);
      }
    },
  },
};
</script>

<style scoped>
.city-form {
}
.city-form__input-wrapper {
  position: relative;
}
.city-form__input {
  width: 100%;
  padding-right: 32px;
  outline: none;
  border: 1px solid rgba(151, 151, 151, 0.5);
  border-radius: 5px;
  padding: 0 16px;
  height: 48px;
  font-family: 'Futura PT';
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
}
.city-form__clear {
  position: absolute;
  right: 18px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.city-form__clear-img {
  width: 12px;
  height: 12px;
}
.city-form__title {
  margin-top: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}
.city-form__body {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 18px;
  margin-top: 12px;
}
.city-form__search {
  position: relative;
  max-width: 540px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.city-form__list {
  position: absolute;
  top: 48px;
  border: 1px solid rgba(151, 151, 151, 0.5);
  border-top: none;
  border-radius: 0 0 5px 5px;
  background-color: #fff;
  z-index: 1;
  width: 100%;
}
.city-form__list ul {
  list-style-type: none;
}
.city-form__list li {
}
.city-form__input.extended {
  border-radius: 5px 5px 0 0;
  border-bottom: none;
}
.city-form__separator {
  width: 90%;
  margin: 0 auto;
  height: 2px;
  background-color: rgba(151, 151, 151, 0.3);
}
.city-form__item {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #979797;
  padding: 8px 16px;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
}
.city-form__item:hover {
  color: #272727;
}

@media screen and (max-width: 640px) {
  .city-form__body {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .city-form__title {
    font-size: 18px;
  }
  .city-form__btn {
    font-size: 14px;
  }
  .city-form__input {
    font-size: 16px;
    padding-right: 25px;
  }
  .city-form__list li {
    font-size: 16px;
  }
  .city-form__clear {
    right: 9px;
  }
  .city-form__body {
    gap: 16px;
  }
  .city-form {
  }
}
</style>
