<template>
  <div class="simple-status">
    <Statuses />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Statuses from './components/Statuses.vue';

export default defineComponent({
  name: 'App',
  components: {
    Statuses,
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Inter:wght@300;400;600;700;800&family=Poppins:wght@600;700&display=swap');

body {
  position: relative;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  font-feature-settings: 'zero' on, 'ordn' on, 'ss02' on, 'ss05' on;
  overflow-y: overlay; // removes the black line near scrollbar when Chrome browser is scaled > 100%
}
</style>
