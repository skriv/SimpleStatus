import {
  getData,
  setData,
  setStatus,
  clearStatusForRemovedStatus,
  updatedEmojiForAllFrames,
  clearStatusForSelectedFrame
} from './methods';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from './config'

figma.showUI(__html__, {
  width: WINDOW_WIDTH,
  height: WINDOW_HEIGHT
});

figma.ui.onmessage = async msg => {
  switch (msg.type) {
    case 'get-data':
      const value = await getData(msg.key)
      figma.ui.postMessage({
        type: 'get-data',
        value,
      });
      break;
    case 'set-data':
      setData(msg.key, msg.value)
      break;
    case 'set-status':
      setStatus(msg.status)
      break;
    case 'clear-status-for-removed-status':
      clearStatusForRemovedStatus(msg.char)
      break;
    case 'update-emoji-for-all-frames':
      updatedEmojiForAllFrames(msg.selectedChar ,msg.char)
      break;
    case 'clear-status-for-selected-frames':
      clearStatusForSelectedFrame()
      break;
  }
};
