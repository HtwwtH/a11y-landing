<template>
  <div class="tabs">
    <div role="tablist" aria-labelledby="tablist-1" class="manual">
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
        <span class="focus">О хомяках</span>
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
        <span class="focus">О товарах</span>
      </button>
    </div>

    <div
      id="tabpanel-1"
      role="tabpanel"
      aria-labelledby="tab-1"
      class="tabpanel__content"
      :class="{ 'd-none' : activeTab !== 1 }"
    >
      <p>
        Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus per placerat iaculis, ridiculus dolor lacus curabitur magna finibus ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit integer augue dui metus molestie nullam at. Ullamcorper suscipit arcu porta aenean non vestibulum, sagittis netus phasellus fermentum a urna fusce, velit ad nec semper interdum. Erat massa nisi congue aliquam a accumsan ante efficitur quisque tempus, condimentum faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac proin nullam penatibus pretium neque suscipit vestibulum mattis.<br /><br />

        Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus per placerat iaculis, ridiculus dolor lacus curabitur magna finibus ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit integer augue dui metus molestie nullam at. Ullamcorper suscipit arcu porta aenean non vestibulum, sagittis netus phasellus fermentum a urna fusce, velit ad nec semper interdum. Erat massa nisi congue aliquam a accumsan ante efficitur quisque tempus, condimentum faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac proin nullam penatibus pretium neque suscipit vestibulum mattis.<br /><br />

        Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus per placerat iaculis, ridiculus dolor lacus curabitur magna finibus ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit integer augue dui metus molestie nullam at. Ullamcorper suscipit arcu porta aenean non vestibulum, sagittis netus phasellus fermentum a urna fusce, velit ad nec semper interdum. Erat massa nisi congue aliquam a accumsan ante efficitur quisque tempus, condimentum faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac proin nullam penatibus pretium neque suscipit vestibulum mattis.
      </p>
    </div>
    <div
      id="tabpanel-2"
      role="tabpanel"
      aria-labelledby="tab-2"
      class="tabpanel__content"
      :class="{ 'd-none' : activeTab !== 2 }"
    >
      <p>
        Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus per placerat iaculis, ridiculus dolor lacus curabitur magna finibus ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit integer augue dui metus molestie nullam at. Ullamcorper suscipit arcu porta aenean non vestibulum, sagittis netus phasellus fermentum a urna fusce, velit ad nec semper interdum. Erat massa nisi congue aliquam a accumsan ante efficitur quisque tempus, condimentum faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac proin nullam penatibus pretium neque suscipit vestibulum mattis.<br /><br />

        Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus per placerat iaculis, ridiculus dolor lacus curabitur magna finibus ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit integer augue dui metus molestie nullam at. Ullamcorper suscipit arcu porta aenean non vestibulum, sagittis netus phasellus fermentum a urna fusc
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentTabs',

  components: {
  },

  props: {
  },

  data() {
    return {
      activeTab: 1,
      selectedTab: 1,
    }
  },
  
  computed: {
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
    margin-bottom: 94px;
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
