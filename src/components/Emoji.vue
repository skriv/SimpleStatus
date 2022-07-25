<template>
  <div class="emoji">
    <div
      class="emoji-header"
    >
      <!-- Back btn -->
      <div
        class="emoji-header_back"
        @click="close"
      >
        <span>{{ BACK_BTN_ICON }}</span> Go back
      </div>
      <!-- Search field -->
      <input
        v-model="search"
        type="text"
        placeholder="Search"
      >
    </div>
    <div v-if="listEmoji && listEmoji.length" class="emoji-list">
      <span
        v-for="(e, i) of listEmoji"
        :key="i"
        @click="select(e)"
        :title="e.name"
      >
        {{ e.char }}
      </span>
    </div>
    <div v-else class="emoji-list_empty">
      Not found
    </div>
  </div>
</template>

<script lang="ts">
  import {
    computed,
    defineComponent,
    ref,
  } from 'vue'
  import {
    BACK_BTN_ICON
  } from '../config'
  import emoji from '../emoji' 

  export default defineComponent({
    name: 'Emoji',
    emits: ['on-close', 'on-select'],
    setup(props, { emit }) {
      const search = ref(null)
      const listEmoji = computed(() => {
        if (!search.value) return emoji
        return emoji.filter(e => e.name.includes(search.value as any))
      })

      function close() {
        emit('on-close')
      }

      function select(emoji: any) {
        emit('on-select', emoji)
        close()
      }

      return {
        listEmoji,
        close,
        select,
        search,
        BACK_BTN_ICON
      }
    }
  })
</script>

<style lang="scss">
  .emoji {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    padding-right: 14px;
    box-sizing: border-box;
    padding-top: 35px;

    &-header {
      width: 100%;
      position: fixed;
      top: 0;
      display: flex;
      align-items: center;
      padding: 4px 22px 4px 8px;
      background-color: #fff;
      z-index: 2;
      box-sizing: border-box;
      cursor: pointer;
      font-size: 12px;
      box-shadow: 0 0 11px rgb(0 0 0 / 5%);

      &_back {
        span {
          font-size: 15px;
          margin-right: 2px;
        }
      }

      input {
        width: 130px;
        margin-left: auto;
        border-color: rgb(0 0 0 / 20%);
        border-width: 1px;
        border-radius: 3px;
        padding: 4px 6px;
      }

      &:hover {
        background-color: #f1f8fe;
      }
    }

    &-list {
      width: 100%;
      height: auto;
      position: relative;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      z-index: 1;
      overflow: auto;
      background-color: #fff;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      &_empty {
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
      }
    }
  }
</style>
