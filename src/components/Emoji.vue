<template>
  <div class="emoji">
    <div
      class="emoji-header"
      @click="close"
    >
      <span>←</span> Go back
    </div>
    <div class="emoji-list">
      <span
        v-for="(e, i) of EMOJI"
        :key="i"
        @click="select(e)"
      >
        {{ e }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
  } from 'vue';
  import {
    EMOJI
  } from '../config'

  export default defineComponent({
    name: 'Emoji',
    emits: ['on-close', 'on-select'],
    setup(props, { emit }) {
      function close() {
        emit('on-close')
      }

      function select(emoji: string) {
        emit('on-select', emoji)
        close()
      }

      return {
        EMOJI,
        close,
        select
      }
    }
  })
</script>

<style lang="scss" scoped>
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
      padding: 4px 8px;
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

    &-list {
      width: 100%;
      height: auto;
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
  
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
</style>
