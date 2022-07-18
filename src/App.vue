<template>
  <div class="simple-status">
    <div
      v-for="(status, i) of STATUSES"
      :key="i"
      class="button"
      @click="changeStatus"
    >
      <span>{{ status.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  const STATUSES = [
    {
      text: '🔴  Progress'
    },
    {
      text: '🟡  Review'
    },
    {
      text: '🟢  Done'
    }
  ]

  function changeStatus(e: any) {
    const buttonName = e.target.innerText;
    console.log(buttonName);
    parent.postMessage({ pluginMessage: { type: 'change-status', buttonName } }, '*')
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Inter:wght@300;400;600;700;800&family=Poppins:wght@600;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-feature-settings: 'zero' on, 'ordn' on, 'ss02' on, 'ss05' on;
    overflow-y: overlay; // removes the black line near scrollbar when Chrome browser is scaled > 100%
  }

  .button {
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 16px;

    &:hover {
      background-color: #F0F0F0;
      cursor: pointer;
    }
  }
</style>
