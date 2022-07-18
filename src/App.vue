<template>
  <div class="simple-status">
    <div
      v-for="(status, i) of STATUSES"
      :key="i"
      class="button"
      @click="changeStatus"
    >
      <i>{{ status.icon }}</i>
      <span>{{ status.text }}</span>
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
    console.log(buttonName);
    parent.postMessage({ pluginMessage: { type: 'change-status', buttonName } }, '*')
  }
</script>

<style lang="scss">
  body { 
    margin: 0;
    margin-top: 10px;
  }

  .button {
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 16px;
    padding-left: 10px;

    i {
      width: 20px;
    }

    &:hover {
      background-color: #F0F0F0;
      cursor:pointer;
    }
  }
</style>
