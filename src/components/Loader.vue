<template>
  <div class="loader-wrap">
    <div class="loader" />
  </div>
</template>

<style lang="scss" scoped>
  [class*="loader-"] {
    display: inline-block;
    width: 1em;
    height: 1em;
    color: inherit;
    vertical-align: middle;
    pointer-events: none;
  }

  .loader-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    width: 20px;
    height: 20px;
    border: .2em solid transparent;
    border-top-color: currentcolor;
    border-radius: 50%;
    animation: 0.5s loader linear infinite;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: inherit;
      height: inherit;
      position: absolute;
      top: -.2em;
      left: -.2em;
      border: .2em solid currentcolor;
      border-radius: 50%;
      opacity: .5;
    }
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>