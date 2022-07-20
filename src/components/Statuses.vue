<template>
  <draggable
    v-if="statuses && statuses.length"
    v-model="statuses"
    @change="saveToStorage"
  >
    <template #item="{ element }">
      <div
        class="simple-status_button"
        @click="setStatus"
      >
        <span @click="openEmoji(element, $event)">{{ element.icon }}</span>&nbsp;&nbsp;{{ element.text }}
        <div class="simple-status_button-opt">⋮</div>
      </div>
    </template>
  </draggable>
  <div class="simple-status_button simple-status_button-new">
    + Add New
  </div>
  <div
    class="simple-status_button simple-status_button-clear"
    @click="removeStatus"
  >
    Clear status
  </div>
  <Emoji
    v-if="opened"
    @on-close="closeEmoji"
    @on-select="selecteEmoji"
  />
</template>

<script lang="ts">
  import {
    defineComponent,
    onMounted,
    ref
  } from 'vue';
  import { pluginApi } from '../api/connection';
  import draggable from 'vuedraggable';
  import Emoji from './Emoji.vue';
  import {
    STATUSES_LIST_KEY,
    DEFAULT_STATUSES,
    EMOJI
  } from '../config'

  export default defineComponent({
    name: 'Statuses',
    components: {
      Emoji,
      draggable,
    },
    setup() {
      const opened = ref(false)
      const statuses = ref()
      const selectedStatus = ref()
    
      async function setStatus(e: any) {
        const buttonName = e.target.innerText;
        await pluginApi.setStatus(buttonName)
      }

      function removeStatus() {
        pluginApi.removeStatus()
      }

      function openEmoji(status: any, e: any) {
        e.stopPropagation()
        opened.value = true
        selectedStatus.value = status
      }

      function closeEmoji() {
        selectedStatus.value = null
        opened.value = false
      }

      function saveToStorage() {
        pluginApi.setItem(STATUSES_LIST_KEY, JSON.stringify(statuses.value))
      }
    
      async function selecteEmoji(emoji: string) {
        const foundIndex = statuses.value.findIndex((x: any) => x.text == selectedStatus.value.text)
        statuses.value[foundIndex] = { ...selectedStatus.value, icon: emoji }
        saveToStorage()
        closeEmoji()
      }

      onMounted(async () => {
        const savedStatuses = await pluginApi.getItem(STATUSES_LIST_KEY)
        statuses.value = !savedStatuses ? DEFAULT_STATUSES : JSON.parse(savedStatuses)
      })

      return {
        opened,
        setStatus,
        removeStatus,
        selecteEmoji,
        openEmoji,
        statuses,
        saveToStorage,
        EMOJI,
        closeEmoji
      }
    }
  })
</script>

<style lang="scss">
  .simple-status {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

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
      cursor: pointer;

      span {
        display: inline-block;
        font-size: 15px;
        padding-right: 5px;
        padding-left: 4px;
        transition: all 0.1s ease;
        cursor: pointer;

        &:hover {
          transform: scale(1.2);
        }
      }

      &-opt {
        float: right;
        font-size: 16px;
        display: none;

        &:hover {
          transform: scale(1.2);
        }
      }

      &-new {
        padding-left: 16px;
        color: #18A0FB;
      }

      &-clear {
        padding-left: 16px;
        color: #E93940;
        margin-top: auto;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }

      &:hover {
        background-color: #f1f8fe;

        .simple-status_button-opt {
          display: inline;
        }
      }
    }
  }
</style>
