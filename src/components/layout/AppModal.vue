<template>
  <div class="modal">
    <div class="modal__bg">
        <form
            ref="formRef"
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
                <label
                    class="label"
                    :class="{'label--error': v$.username.$invalid}"
                >
                    <span class="label__text">Имя и фамилия*</span>
                    <input
                        :ref="el => { inputs[0] = el }"
                        type="text"
                        class="label__input"
                        placeholder="Введите имя и фамилию"
                        v-model="state.username"
                        @blur="v$.username.$touch"
                        :aria-invalid="v$.username.$invalid"
                    >
                    <span class="label__error">Не заполнено поле имя и фамилия</span>
                </label>

                <label
                    class="label"
                    :class="{'label--error': v$.email.$invalid}"
                >
                    <span class="label__text">E-mail*</span>
                    <input
                        :ref="el => { inputs[1] = el }"
                        type="email"
                        class="label__input"
                        placeholder="gmail@gmail.com"
                        v-model="state.email"
                        @blur="v$.email.$touch"
                        :aria-invalid="v$.email.$invalid"
                    >
                    <span v-if="v$.email.$errors.length && v$.email.$errors[0].$validator === 'required'" class="label__error">Не заполнено поле email</span>
                    <span v-else-if="v$.email.$errors.length && v$.email.$errors[0].$validator === 'email'" class="label__error">Неверно заполнено поле email</span>
                </label>

                <label
                    class="label"
                    :class="{'label--error': v$.address.$invalid}"
                >
                    <span class="label__text">Адрес доставки*</span>
                    <textarea
                        :ref="el => { inputs[2] = el }"
                        class="label__textarea"
                        placeholder="Введите полный почтовый адрес с индексом"
                        v-model="state.address"
                        @blur="v$.address.$touch"
                        :aria-invalid="v$.address.$invalid"
                    ></textarea>
                    <span class="label__error">Не заполнено поле адрес доставки</span>
                </label>
            </div>

            <button
                type="submit"
                class="modal__submit button button--black"
                @click.prevent="submitForm"
                @keydown.tab.prevent="inputs[0].focus()"
            >
                Отправить
            </button>
        </form>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import { reactive, computed, onMounted, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'AppModal',

    directives: {
        clickOutside: vClickOutside.directive
    },

    setup () {
        const store = useStore()
        const productTitle = computed(() => store.state.modalTitle)

        const state = reactive({
            username: '',
            email: '',
            address: '',
        })

        const rules = {
            username: { required, $lazy: true },
            email: { required, email, $lazy: true },
            address: { required, $lazy: true }
        }

        const v$ = useVuelidate(rules, state)

        const hideModal = () => store.commit('hideModal')

        const submitForm = async() => {
            const isFormCorrect = await v$.value.$validate()
            if (isFormCorrect) {
                hideModal()
                store.commit('showThankModal')
            } else {
                if (v$.value.$errors[0].$property === 'username') {
                    inputs.value[0].focus()
                } else if(v$.value.$errors[0].$property === 'email') {
                    inputs.value[1].focus()
                } else if(v$.value.$errors[0].$property === 'address') {
                    inputs.value[2].focus()
                }
            }
        }

        const formRef = ref(null)
        const inputs = ref([])

        onMounted(() => {
            v$.value.$reset()
            document.documentElement.style.overflow = 'hidden'
            formRef.value.focus()
            inputs.value = []
        })

        onUnmounted(() => {
            document.documentElement.style.overflow = 'auto'
        })

        return {
            hideModal,
            submitForm,
            formRef,
            inputs,
            productTitle,
            state,
            v$
        }
    }
}
</script>

<style lang="scss">
    .modal {
        &__bg {
            display: flex;
            justify-content: center;
            align-items: center;

            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(217, 217, 217, 0.7);
        }

        &__body {
            width: fit-content;
            height: fit-content;
            padding: 74px 88px;

            background-color: $white;

            .h3 {
                margin-bottom: 34px;
            }
        }

        &__form {
            margin-bottom: 30px;

            .label {
                position: relative;
                display: flex;
                flex-direction: column;

                &--error {
                    .label__input, .label__textarea {
                        border: 1px solid $red;
                    }

                    .label__error {
                        display: block;
                    }
                }

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

                &__textarea {
                    height: 121px;
                    min-height: 121px;
                    max-height: 200px;
                }

                &__error {
                    display: none;
                    
                    position: absolute;
                    bottom: 12px;

                    color: $red;
                    font-size: 12px;
                }
            }
        }
    }
</style>