<template>
  <div class="simple-status">
    <div
      v-for="(status, i) of STATUSES"
      :key="i"
      class="simple-status_button"
      @click="changeStatus"
    >
      <span @click="opened = true">{{ status.icon }}</span>&nbsp;{{ status.text }}
    </div>
    <EmojiPicker
      v-if="opened"
      disable-skin-tones
      @select="selectedEmoji"
    />
  </div>
</template>

<script setup lang="ts">
  import EmojiPicker from 'vue3-emoji-picker';
  import '../node_modules/vue3-emoji-picker/dist/style.css';
  import { ref } from 'vue';

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
  const disabledGroups = [
    'travel_places',
    'objects',
    'symbols',
    'flags'
  ]

  const opened = ref(false)

  function changeStatus(e: any) {
    const buttonName = e.target.innerText;
    parent.postMessage({ pluginMessage: { type: 'change-status', buttonName } }, '*')
  }

  function selectedEmoji(emoji: any) {
    console.log(emoji)
    opened.value = false
  }
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

  .v3-emoji-picker .v3-body .v3-body-inner .v3-group .v3-emojis button {
    flex-basis: 15%;
    max-width: 20%;
  }

  .v3-emoji-picker {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .simple-status {
    &_button {
      width: 100%;
      display: inline-block;
      align-items: center;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      padding: 10px 12px 10px 8px;
      box-sizing: border-box;
  
      &:hover {
        background-color: rgba(208, 232, 252, 0.3);
        cursor: pointer;
      }

      span {
        display: inline-block;
        font-size: 13px;
        padding-right: 10px;
        padding-left: 4px;
        transition: all 0.2s ease;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
</style>
