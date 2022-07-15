<template>
  <footer class="footer container">
    <nav class="footer__nav" aria-label="Соцсети">
        <p class="h2" id="social">Соц.сети</p>
        <ul class="footer__sociallist" aria-labelledby="social">
            <li class="footer__socialitem">
                <a class="link" href="#">
                    <img src="/src/assets/images/icons/email.svg" alt="email">
                </a>
            </li>
            <li class="footer__socialitem">
                <a class="link" href="#">
                    <img src="/src/assets/images/icons/tg.svg" alt="telegram">
                </a>
            </li>
            <li class="footer__socialitem">
                <a class="link" href="#">
                    <img src="/src/assets/images/icons/facebook.svg" alt="facebook">
                </a>
            </li>
        </ul>
    </nav>

    <div class="footer__subscribe">
        <p class="h2" id="subscribe">Подписка на новости</p>
        <form class="subscribe__form" action="">
            <div class="subscribe__field">
                <label
                    class="label"
                    :class="{'label--error': v$.email.$invalid}"
                >
                    <input
                        ref="emailRef"
                        type="email"
                        class="label__input"
                        placeholder="E-mail"
                        v-model="state.email"
                        @blur="v$.email.$touch"
                        aria-labelledby="subscribe"
                        :aria-invalid="v$.email.$invalid"
                    >
                    <span v-if="v$.email.$errors.length && v$.email.$errors[0].$validator === 'required'" class="label__error">Не заполнено поле email</span>
                    <span v-else-if="v$.email.$errors.length && v$.email.$errors[0].$validator === 'email'" class="label__error">Неверно заполнено поле email</span>
                </label>
                <button
                    ref="subscribeBtnRef"
                    type="submit"
                    class="subscribe__submit button button--black"
                    @click.prevent="submitForm"
                >
                    Подписаться
                </button>
                <Teleport to="#modal">
                    <thank-subscribe v-if="thankSubscribeVisible" @close-thank="focusSubscribeBtn" />
                </Teleport>
            </div>
            <div
                class="subscribe__agreement"
                :class="{'subscribe__agreement--error': v$.agreement.$invalid}"
            >
                <div
                    ref="agreementRef"
                    role="checkbox"
                    :aria-checked="state.agreement"
                    :aria-invalid="v$.agreement.$invalid"
                    @click="state.agreement = !state.agreement"
                    @keyup.enter.prevent="state.agreement = !state.agreement"
                    @blur="v$.agreement.$touch"
                    tabindex="0"
                    class="checkbox"
                >
                    Согласен на обработку персональных данных
                </div>
                <span v-if="v$.agreement.$invalid" class="label__error">Необходимо согласиться с правилами</span>
            </div>
        </form>
    </div>
  </footer>
</template>

<script>
    import ThankSubscribe from '@/components/layout/ThankSubscribe.vue'
    import useVuelidate from '@vuelidate/core'
    import { required, email } from '@vuelidate/validators'

    import { reactive, ref } from 'vue'
    import { useStore } from 'vuex'

    import { useModal } from '@/hooks/usePage.js'

    export default {
        name: 'AppFooter',

        components: {
            ThankSubscribe
        },

        setup() {
            const state = reactive({
                email: '',
                agreement: true
            })

            const isAgreementAccepted = (value) => value === true

            const rules = {
                email: { required, email, $lazy: true },
                agreement: { isAgreementAccepted, $lazy: true }
            }

            const v$ = useVuelidate(rules, state)

            const store = useStore()

            const submitForm = async() => {
                const isFormCorrect = await v$.value.$validate()

                if (isFormCorrect) {
                    store.commit('showThankSubscribe')
                } else {
                    if (v$.value.$errors[0].$property === 'email') {
                        emailRef.value.focus()
                    } else if(v$.value.$errors[0].$property === 'agreement') {
                        agreementRef.value.focus()
                    }
                }
            }

            const emailRef = ref(null)
            const agreementRef = ref(null)
            const subscribeBtnRef = ref(null)

            const { thankSubscribeVisible } = useModal()

            const focusSubscribeBtn = () => {
                subscribeBtnRef.value.focus()
            }

            return {
                submitForm,
                focusSubscribeBtn,
                emailRef,
                agreementRef,
                subscribeBtnRef,
                thankSubscribeVisible,
                state,
                v$
            }
        }
    }
</script>

<style lang="scss">
    .footer {
        padding: 34px 0;
        display: flex;

        &__nav {
            .h2 {
                padding-left: 12px;
                text-align: left;
                margin-bottom: 12px;
            }
        }

        &__sociallist {
            display: flex;
            justify-content: center;
        }

        &__socialitem {
            .link {
                display: block;
                padding: 12px;

                color: $black;
                font-size: 18px;
                text-decoration: none;
                transition: opacity .3s ease;

                &:hover {
                    opacity: .7;
                }
            }
        }

        &__subscribe {
            margin-left: auto;

            .h2 {
                text-align: left;
                margin-bottom: 24px;
            }
        }

        .subscribe {
            &__field {
                display: flex;
            }

            &__submit {
                width: 280px;
                height: 56px;

                margin-left: 36px;
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

                    &__input {
                        width: 300px;
                        padding: 12px 0;
                        margin-top: 4px;
                        margin-bottom: 26px;

                        border: none;
                        border-bottom: 1px solid $black;

                        font-size: 18px;
                        line-height: 22px;

                        box-sizing: border-box;

                        &::placeholder {
                            color: $black;
                        }
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

            &__agreement {
                &--error {
                    position: relative;

                    .label__error {
                        display: block;
                        bottom: unset;
                    }
                }

                .checkbox {
                    display: inline-block;
                    padding: 4px 8px 4px 2px;
                    cursor: pointer;

                    &::before {
                        position: relative;
                        top: 1px;
                        left: -4px;
                        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='16' width='16' style='forced-color-adjust: auto;'%3E%3Crect x='2' y='2' height='13' width='13' rx='2' stroke='currentcolor' stroke-width='1' fill-opacity='0' /%3E%3C/svg%3E");
                    }

                    &[aria-checked="true"]::before {
                        position: relative;
                        top: 1px;
                        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='16' width='16' style='forced-color-adjust: auto;'%3E%3Crect x='2' y='2' height='13' width='13' rx='2' stroke='currentcolor' stroke-width='1' fill-opacity='0' /%3E%3Cpolyline points='4,8 7,12 12,5' fill='none' stroke='currentcolor' stroke-width='2' /%3E%3C/svg%3E");
                    }

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>