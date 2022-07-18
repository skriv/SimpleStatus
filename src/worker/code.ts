import { initApi } from './connection';
import {
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  SEPARATOR
} from '../config'

(async function () {
  figma.showUI(__html__, {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  });

  figma.ui.onmessage = msg => {
    figma.currentPage.selection.forEach(node => {
      if (node.type == 'FRAME') {
        if (msg.type === 'change-status') {
          if (node.name.indexOf(SEPARATOR) != -1) {
            node.name = node.name.split(SEPARATOR)[1];
          }
          node.name = msg.buttonName + SEPARATOR + node.name;
        } else {
          node.name = node.name.split(SEPARATOR)[1];
        }
        node.setRelaunchData({ relaunch: '' })
      }
    });
  };

  // wait for UI
  await new Promise(x => setTimeout(x, 1000));
  await initApi();
}());
