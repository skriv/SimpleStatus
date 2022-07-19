<template>
  <div
    v-for="(status, i) in statuses"
    :key="i"
    class="simple-status_button"
    @click="changeStatus"
  >
    <span @click="openEmoji(status)">{{ status.icon }}</span>&nbsp;&nbsp;{{ status.text }}
  </div>
  <EmojiPicker
    v-if="opened"
    disable-skin-tones
    @select="selecteEmoji"
  />
</template>

<script lang="ts">
  import {
    defineComponent,
    onMounted,
    ref
  } from 'vue';
  import { pluginApi } from '../api/connection';
  import EmojiPicker from 'vue3-emoji-picker';
  import '../../node_modules/vue3-emoji-picker/dist/style.css';
  import {
    STATUSES_LIST_KEY,
    DEFAULT_STATUSES
  } from '../config'

  const disabledGroups = [
    'travel_places',
    'objects',
    'symbols',
    'flags'
  ]

  export default defineComponent({
    name: 'Statuses',
    components: {
      EmojiPicker,
    },
    setup() {
      const opened = ref(false)
      const statuses = ref()
      const selectedStatus = ref()
    
      async function changeStatus(e: any) {
        const buttonName = e.target.innerText;
        await pluginApi.setStatus(buttonName)
      }
    
      async function selecteEmoji(emoji: any) {
        const foundIndex = statuses.value.findIndex((x: any) => x.text == selectedStatus.value.text)
        statuses.value[foundIndex] = { ...selectedStatus.value, icon: emoji.i }
        console.log(JSON.stringify(statuses.value));
        
        pluginApi.setItem(STATUSES_LIST_KEY, JSON.stringify(statuses.value))
        selectedStatus.value = null
        opened.value = false
      }

      function openEmoji(status: any) {
        selectedStatus.value = status
        opened.value = true
      }

      onMounted(async () => {
        const savedStatuses = await pluginApi.getItem(STATUSES_LIST_KEY)
        statuses.value = !savedStatuses ? DEFAULT_STATUSES : JSON.parse(JSON.parse(savedStatuses))
      })

      return {
        opened,
        changeStatus,
        selecteEmoji,
        openEmoji,
        disabledGroups,
        statuses
      }
    }
  })
</script>

<style lang="scss">
  .simple-status {
    &_button {
      width: 100%;
      display: inline-block;
      align-items: center;
      font-style: normal;
      font-weight: normal;
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
        padding-right: 5px;
        padding-left: 4px;
        transition: all 0.1s ease;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
</style>
