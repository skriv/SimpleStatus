<template>
  <template v-if="!openedStatusModal && !openedEmojiModal">
    <draggable
      v-if="statuses && statuses.length"
      v-model="statuses"
      @change="saveToStorage"
    >
      <template #item="{ element, index }">
        <div
          class="simple-status_button"
          @click="setStatus"
        >
          <span @click="openEmoji(element, $event)">{{ element.char }}</span>&nbsp;&nbsp;{{ element.name }}

          <!-- Options -->
          <div
            class="simple-status_button-opt"
          >
            {{ OPTION_BTN_ICON }}
            <div
              class="simple-status_button-opts"
            >
              <div
                class="color-red simple-status_button-opts-remove"
                @click="removeStatus(index, element, $event)"
              >
                {{ REMOVE_BTN_ICON }}
              </div>
              <div
                @click="editStatus(element, $event)"
              >
                {{ EDIT_BTN_ICON }}
              </div>
            </div>
          </div>

        </div>
      </template>
    </draggable>
    <div
      class="simple-status_button simple-status_button-new"
      @click="openedStatusModal = true"
    >
      + Add New
    </div>
    <div
      class="simple-status_button simple-status_button-clear"
      @click="clearStatus"
    >
      Clear status
    </div>
  </template>

  <!-- Form for create or update status-->
  <StatusForm
    v-if="openedStatusModal"
    @on-close="closeStatusModal"
    @on-save="addNewStatus"
    :status="selectedStatus"
  />

  <!-- Emoji list -->
  <Emoji
    v-if="openedEmojiModal"
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
  import StatusForm from './StatusForm.vue';
  import {
    STATUSES_LIST_KEY,
    DEFAULT_STATUSES,
    OPTION_BTN_ICON,
    REMOVE_BTN_ICON,
    EDIT_BTN_ICON
  } from '../config'

  export default defineComponent({
    name: 'Statuses',
    components: {
      Emoji,
      draggable,
      StatusForm,
    },
    setup() {
      const openedEmojiModal = ref(false)
      const openedStatusModal = ref(false)
      const statuses = ref()
      const selectedStatus = ref()
    
      async function setStatus(e: any) {
        const buttonName = e.target.innerText.replace(OPTION_BTN_ICON, '');
        await pluginApi.setStatus(buttonName)
      }

      function saveToStorage() {
        pluginApi.setItem(STATUSES_LIST_KEY, JSON.stringify(statuses.value))
      }

      function removeStatus(index: any, status: any, e: any) {
        e.stopPropagation()
        statuses.value.splice(index, 1)
        pluginApi.clearStatusForRemovedStatus(status.char)
        saveToStorage()
      }

      function openEmoji(status: any, e: any) {
        e.stopPropagation()
        openedEmojiModal.value = true
        selectedStatus.value = status
      }

      function closeEmoji() {
        selectedStatus.value = null
        openedEmojiModal.value = false
      }
    
      async function selecteEmoji(emoji: any) {
        const foundIndex = statuses.value.findIndex((x: any) => x.name == selectedStatus.value.name)
        statuses.value[foundIndex] = { ...selectedStatus.value, char: emoji.char }
        pluginApi.updatedEmojiForAllFrames(selectedStatus.value.char, emoji.char)
        saveToStorage()
        closeEmoji()
      }

      function closeStatusModal() {
        selectedStatus.value = null
        openedStatusModal.value = false
      }

      function addNewStatus(status: any) {
        if (selectedStatus.value) {
          const foundIndex = statuses.value.findIndex((x: any) => x.name == selectedStatus.value.name)
          statuses.value[foundIndex] = status
        } else {
          statuses.value = [...statuses.value, status]
        }
        saveToStorage()
        closeStatusModal()
      }

      function editStatus(status: any, e: any) {
        e.stopPropagation()
        selectedStatus.value = status
        openedStatusModal.value = true
      }

      function clearStatus() {
        pluginApi.clearStatusForSelectedFrame()
      }

      onMounted(async () => {
        const savedStatuses = await pluginApi.getItem(STATUSES_LIST_KEY)
        statuses.value = !savedStatuses ? DEFAULT_STATUSES : JSON.parse(savedStatuses)
      })

      return {
        openedEmojiModal,
        openedStatusModal,
        setStatus,
        removeStatus,
        selecteEmoji,
        openEmoji,
        statuses,
        saveToStorage,
        closeEmoji,
        OPTION_BTN_ICON,
        addNewStatus,
        editStatus,
        selectedStatus,
        closeStatusModal,
        clearStatus,
        REMOVE_BTN_ICON,
        EDIT_BTN_ICON
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
      position: relative;
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
        padding: 0 6px;

        &:hover {
          transform: scale(1.2);
          color: #18A0FB;

          .simple-status_button-opts {
            display: flex !important;
          }
        }
      }

      &-new {
        padding-left: 16px;
        color: #18A0FB;
      }

      &-opts {
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #f1f8fe;
        display: none;
        box-shadow: 0 0 11px rgb(0 0 0 / 5%);
        z-index: 2;

        > div {
          padding: 0 6px;
          cursor: pointer;

          &:hover {
            transform: scale(1.2);
          }
        }

        &-remove {
          font-size: 8px;
        }
      }

      &-clear {
        padding-left: 16px;
        color: #E93940;
        margin-top: auto;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        position: sticky;
        bottom: 0;
        left: 0;
        background-color: #fff;
        margin-top: auto;
      }

      &:hover {
        background-color: #f1f8fe;

        .simple-status_button-opt {
          display: inline;
        }
      }
    }
  }

  .color-red {
    color: #E93940;
  }
</style>
