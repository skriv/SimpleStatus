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
        const originalName = node.name.split(SEPARATOR)[1]?.trim() || '';
        if (msg.type === 'change-status') {
          if (node.name.indexOf(SEPARATOR) != -1) {
            node.name = originalName;
          }
          node.name = `${msg.buttonName} ${SEPARATOR} ${node.name}`;
        } else {
          node.name = originalName;
        }
        node.setRelaunchData({ relaunch: '' })
      }
    });
  };
}());
