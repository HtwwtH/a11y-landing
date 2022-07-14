<template>
  <div class="modal">
    <div class="modal__bg">
        <div
            ref="formRef"
            role="dialog"
            class="modal__body"
            aria-labelledby="modal_label"
            aria-modal="true"
            v-click-outside="hideModal"
            @keyup.esc.prevent="hideModal"
            tabindex="0"
        >
            <h2 id="modal_label" class="h2">Спасибо за подписку!</h2>
            <button
                type="button"
                class="modal__submit button button--black"
                @click.prevent="hideModal"
                @keydown.tab.prevent="formRef.focus()"
            >
                Закрыть
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3'

import { onMounted, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'ThankSubscribe',

    directives: {
        clickOutside: vClickOutside.directive
    },

    emits: ['closeThank'],

    setup (props, { emit }) {
        const store = useStore()

        const hideModal = () => {
            store.commit('hideThankSubscribe')
            emit('closeThank')
        }

        const formRef = ref(null)

        onMounted(() => {
            document.documentElement.style.overflow = 'hidden'
            formRef.value.focus()
        })

        onUnmounted(() => {
            document.documentElement.style.overflow = 'auto'
        })

        return {
            hideModal,
            formRef
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

            .h2 {
                margin-bottom: 34px;
            }
        }
    }
</style>