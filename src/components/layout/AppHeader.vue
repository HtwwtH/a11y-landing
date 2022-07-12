<script setup>

</script>

<template>
  <header class="header container">
    <nav class="header__nav" aria-label="Навигация по магазину для грызунов">
        <a class="skip-link" href="#main-content" title="К основному контенту">К основному контенту</a>
        <ul class="header__menulist" role="menubar" aria-label="Mythical University">
            <li class="header__menuitem" role="none">
                <a role="menuitem" class="link" href="/">
                    Товары для хомяков
                </a>
            </li>
            <li class="header__menuitem" role="none">
                <a role="menuitem" class="link" href="/">
                    Товары для морских свинок
                </a>
            </li>
            <li class="header__menuitem" role="none">
                <a role="menuitem" class="link" href="/">
                    Товары для крысок
                </a>
            </li>
        </ul>
    </nav>
  </header>
</template>

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