<template>
  <div class="simple-status">
    <div
      v-for="(status, i) of STATUSES"
      :key="i"
      class="simple-status_button"
      @click="changeStatus"
    >
      {{ status.icon }} &nbsp; {{ status.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
  const STATUSES = [
    {
      icon: '🔴',
      text: 'Progress'
    },
    {
      icon: '🟡',
      text: 'Review'
    },
    {
      icon: '🟢',
      text: 'Done'
    }
  ]

  function changeStatus(e: any) {
    const buttonName = e.target.innerText;
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

  .simple-status {
    &_button {
      width: 100%;
      display: flex;
      align-items: center;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 16px;
      padding: 8px;
      box-sizing: border-box;
  
      &:hover {
        background-color: #F0F0F0;
        cursor: pointer;
      }
    }
  }
</style>
