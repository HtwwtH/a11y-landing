<template>
  <div class="tabs">
    <div role="tablist" aria-labelledby="tablist-1" class="manual">
      <button id="tab-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-1">
        <span class="focus">О хомяках</span>
      </button>
      <button id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1">
        <span class="focus">О товарах</span>
      </button>
    </div>

    <div id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
      <p>
        Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus per placerat iaculis, ridiculus dolor lacus curabitur magna finibus ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit integer augue dui metus molestie nullam at. Ullamcorper suscipit arcu porta aenean non vestibulum, sagittis netus phasellus fermentum a urna fusce, velit ad nec semper interdum. Erat massa nisi congue aliquam a accumsan ante efficitur quisque tempus, condimentum faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac proin nullam penatibus pretium neque suscipit vestibulum mattis.

        Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus per placerat iaculis, ridiculus dolor lacus curabitur magna finibus ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit integer augue dui metus molestie nullam at. Ullamcorper suscipit arcu porta aenean non vestibulum, sagittis netus phasellus fermentum a urna fusce, velit ad nec semper interdum. Erat massa nisi congue aliquam a accumsan ante efficitur quisque tempus, condimentum faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac proin nullam penatibus pretium neque suscipit vestibulum mattis.

        Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus per placerat iaculis, ridiculus dolor lacus curabitur magna finibus ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit integer augue dui metus molestie nullam at. Ullamcorper suscipit arcu porta aenean non vestibulum, sagittis netus phasellus fermentum a urna fusce, velit ad nec semper interdum. Erat massa nisi congue aliquam a accumsan ante efficitur quisque tempus, condimentum faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac proin nullam penatibus pretium neque suscipit vestibulum mattis.
      </p>
    </div>
    <div id="tabpanel-2" role="tabpanel" aria-labelledby="tab-2" class="is-hidden">
      <p>
        Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus per placerat iaculis, ridiculus dolor lacus curabitur magna finibus ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit integer augue dui metus molestie nullam at. Ullamcorper suscipit arcu porta aenean non vestibulum, sagittis netus phasellus fermentum a urna fusce, velit ad nec semper interdum. Erat massa nisi congue aliquam a accumsan ante efficitur quisque tempus, condimentum faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac proin nullam penatibus pretium neque suscipit vestibulum mattis.

        Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus per placerat iaculis, ridiculus dolor lacus curabitur magna finibus ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit integer augue dui metus molestie nullam at. Ullamcorper suscipit arcu porta aenean non vestibulum, sagittis netus phasellus fermentum a urna fusc
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentTabs',

  props: {
  },

  data() {
    return {
    }
  },
  
  computed: {
  },

  methods: {
  }
}
</script>

<style scoped lang="scss">
  
</style>
