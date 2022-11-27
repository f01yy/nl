<template>
  <div class="modal" v-if="modelValue" @click="closeModal">
    <div class="modal__body" @click.stop>
      <slot></slot>
      <button class="modal__close" @click="closeModal">
        <img src="@/assets/close-icon.svg" alt="x" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalWindow',

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },

  emits: { 'update:modelValue': null },

  methods: {
    closeModal() {
      this.$emit('update:modelValue', false);
    },
  },
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.modal {
  padding-top: 150px;
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(53, 54, 71, 0.8);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  align-items: flex-start;
}
.modal__body {
  width: 100%;
  max-width: 769px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
  border-radius: 5px;
  padding: 30px 20px;
  position: relative;
  margin: 10px;
}
.modal__close {
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
}
.modal__close:hover {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
</style>
