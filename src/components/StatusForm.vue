<template>
  <div class="status-form">
    <div class="status-form_header" @click="close">
      <span>{{ BACK_BTN_ICON }}</span> Go back
    </div>
    <div class="status-form_content">
      <div class="status-form_content-emoji">
        <div class="status-form_content-emoji-selected" @click="openedEmojiModal = true">
          <span>{{ emoji?.char }}</span> click to change
        </div>
      </div>
      <div class="status-form_content-name">
        <span>Status name:</span>
        <input v-model="name" type="text" />
      </div>
    </div>
    <div class="status-form_footer">
      <div class="status-form_footer-cancel" @click="close">Cancel</div>
      <div class="status-form_footer-save" :class="{ 'status-form_footer-save--disabled': !name }" @click="save">Save</div>
    </div>

    <Emoji v-if="openedEmojiModal" @on-close="openedEmojiModal = false" @on-select="selecteEmoji" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';
import { DEFAULT_ICON_FOR_NEW_STATUS, BACK_BTN_ICON } from '../config';
import Emoji from './Emoji.vue';

export default defineComponent({
  name: 'StatusForm',
  components: {
    Emoji,
  },
  props: {
    status: {
      type: Object,
      default: null,
    },
  },
  emits: ['on-close', 'on-save'],
  setup(props, { emit }) {
    const { status } = toRefs(props);

    const emoji = ref(status.value || DEFAULT_ICON_FOR_NEW_STATUS);
    const name = ref(status.value?.name);
    const openedEmojiModal = ref(false);

    function close() {
      emit('on-close');
    }

    function selecteEmoji(e: any) {
      emoji.value = e;
    }

    function save() {
      if (name.value && emoji.value) {
        emit('on-save', { char: emoji.value.char, name: name.value });
      }
    }

    return {
      close,
      emoji,
      name,
      openedEmojiModal,
      selecteEmoji,
      save,
      BACK_BTN_ICON,
    };
  },
});
</script>

<style lang="scss" scoped>
.status-form {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-sizing: border-box;
  padding-top: 35px;

  &_header {
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    padding: 4px 10px;
    background-color: #fff;
    z-index: 2;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 12px;
    box-shadow: 0 0 11px rgb(0 0 0 / 5%);

    span {
      font-size: 16px;
      margin-right: 6px;
    }

    &:hover {
      background-color: #f1f8fe;
    }
  }

  &_content {
    width: 100%;
    padding: 10px 14px;
    box-sizing: border-box;

    &-emoji {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      font-size: 32px;

      &-selected {
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: rgb(0 0 0 / 50%);
        margin-bottom: 8px;
        cursor: pointer;

        span {
          color: initial !important;
          font-size: 32px;
          margin-right: 8px;
        }

        &:hover {
          color: #18a0fb;
        }
      }
    }

    &-name {
      display: flex;
      flex-direction: column;

      span {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: rgb(0 0 0 / 50%);
        margin-bottom: 4px;
      }

      input {
        border-color: rgb(0 0 0 / 20%);
        border-width: 1px;
        border-radius: 3px;
        padding: 4px 6px;
      }
    }
  }

  &_footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    > div {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      cursor: pointer;
      padding: 10px 14px;
    }

    &-cancel {
      color: #e93940;
    }

    &-save {
      color: #18a0fb;

      &--disabled {
        cursor: not-allowed !important;
        opacity: 0.6;
      }
    }
  }
}
</style>
