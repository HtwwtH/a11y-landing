<template>
  <div class="modal">
    <div class="modal__bg">
        <form
            ref="form"
            role="dialog"
            class="modal__body"
            :aria-label="`Оформление заказа ${productTitle}`"
            aria-modal="true"
            v-click-outside="hideModal"
            @keyup.esc="hideModal"
            tabindex="0"
        >
            <h2 id="modal_label" class="h2">{{ productTitle }}</h2>
            <h3 class="h3">Оформление заказа</h3>

            <div class="modal__form">
                <label class="label">
                    <span class="label__text">Имя и фамилия</span>
                    <input
                        type="text"
                        class="label__input"
                        placeholder="Введите имя и фамилию"
                    >
                </label>

                <label class="label">
                    <span class="label__text">E-mail</span>
                    <input
                        type="email"
                        class="label__input"
                        placeholder="gmail@gmail.com"
                    >
                </label>


                    <span class="label__text">Адрес доставки</span>
                    <textarea
                        class="label__textarea"
                        placeholder="Введите полный почтовый адрес с индексом"
                    ></textarea>

            </div>
        </form>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3'

import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'AppModal',

    directives: {
        clickOutside: vClickOutside.directive
    },

    mounted() {
        document.documentElement.style.overflow = 'hidden'
        this.$refs.form.focus()
        console.log(this.$refs.form)
    },

    unmounted() {
        document.documentElement.style.overflow = 'auto'
    },

    setup () {
        const store = useStore()
        const productTitle = computed(() => store.state.modalTitle)

        const hideModal = () => store.commit('hideModal')

        return {
            hideModal,
            productTitle
        }
    }
}
</script>

<style lang="scss">
    .modal {
        &__bg {
            display: flex;
            justify-content: center;

            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(217, 217, 217, 0.7);
        }

        &__body {
            width: fit-content;
            padding: 74px 88px;

            background-color: $white;

            .h3 {
                margin-bottom: 34px;
            }
        }

        &__form {
            .label {
                &__text {
                    display: block;
                }

                &__input, &__textarea {
                    width: 370px;
                    min-width: 320px;
                    max-width: 370px;
                    padding: 12px 18px;
                    margin-top: 4px;
                    margin-bottom: 26px;

                    border: 1px solid $black;
                    border-radius: 5px;

                    font-size: 18px;
                    line-height: 22px;

                    box-sizing: border-box;

                    &::placeholder {
                        color: $darkGray;
                    }
                }

                &__input {

                }

                &__textarea {
                    height: 121px;
                }
            }
        }
    }
</style>