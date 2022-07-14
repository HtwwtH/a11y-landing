<template>
  <div class="tabs">
    <div role="tablist" class="manual">
      <button
        ref="tab1"
        id="tab-1"
        type="button"
        role="tab"
        :aria-selected="activeTab === 1"
        aria-controls="tabpanel-1"
        @click="chooseTab(1)"
        @keyup.right.left.prevent="selectNextTab"
        class="button"
        :class="[ activeTab === 1 ? 'button--black' : 'button--white' ]"
      >
        <span class="focus">{{ tabs[0].title }}</span>
      </button>
      <button
        ref="tab2"
        id="tab-2"
        type="button"
        role="tab"
        :aria-selected="activeTab === 2"
        aria-controls="tabpanel-2" tabindex="-1"
        @click="chooseTab(2)"
        @keyup.right.left.prevent="selectNextTab"
        class="button"
        :class="[ activeTab === 2 ? 'button--black' : 'button--white' ]"
      >
        <span class="focus">{{ tabs[1].title }}</span>
      </button>
    </div>

    <div
      id="tabpanel-1"
      role="tabpanel"
      aria-labelledby="tab-1"
      tabindex="0"
      class="tabpanel__content"
      :class="{ 'd-none' : activeTab !== 1 }"
    >
      <p v-html="tabs[0].text"></p>
    </div>
    <div
      id="tabpanel-2"
      role="tabpanel"
      aria-labelledby="tab-2"
      tabindex="0"
      class="tabpanel__content"
      :class="{ 'd-none' : activeTab !== 2 }"
    >
      <p v-html="tabs[1].text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentTabs',

  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      activeTab: 1,
      selectedTab: 1,
    }
  },

  methods: {
    chooseTab(id) {
      this.activeTab = id;
    },

    selectNextTab() {
      if (this.selectedTab === 1) {
        this.selectedTab = 2;
        this.$refs.tab2.focus();
      } else {
        this.selectedTab = 1;
        this.$refs.tab1.focus();
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .tabs {
    padding: 0 12px;
    margin-bottom: 64px;
    .button {
      width: 280px;
      margin-right: 22px;
      margin-bottom: 24px;
    }

    .tabpanel__content {
      font-size: 10px;
      line-height: 12px;
    }
  }
</style>
