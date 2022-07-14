<template>
  <header class="header container">
    <nav class="header__nav" aria-label="Навигация по магазину для грызунов">
        <a class="skip-link" href="#main-content" title="К основному контенту">К основному контенту</a>
        <ul class="header__menulist" role="menubar">
            <li class="header__menuitem" role="none">
                <router-link role="menuitem" class="link" to="/">
                    Товары для хомяков
                </router-link>
            </li>
            <li class="header__menuitem" role="none">
                <router-link role="menuitem" class="link" to="/guinea-pigs">
                    Товары для морских свинок
                </router-link>
            </li>
            <li class="header__menuitem" role="none">
                <router-link role="menuitem" class="link" to="/rats">
                    Товары для крысок
                </router-link>
            </li>
        </ul>
    </nav>
  </header>
</template>

<script>
    export default {
        name: 'AppHeader',
    }
</script>

<style lang="scss">
    .header {
        &__nav {
            padding: 20px 100px;
        }

        &__menulist {
            display: flex;
            justify-content: center;
        }

        &__menuitem {
            .link {
                display: block;
                padding: 20px;

                color: $black;
                font-size: 18px;
                text-decoration: none;
                transition: opacity .3s ease;

                &:hover {
                    opacity: .7;
                }
            }
        }
    }
</style>