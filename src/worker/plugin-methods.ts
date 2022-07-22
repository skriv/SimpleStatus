import {
  SEPARATOR
} from '../config'

export class PluginMethods {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [methodName: string]: (...args: any[]) => any;

  getItem(key: string): Promise<any | undefined> {
    return figma.clientStorage.getAsync(key);
  }

  setItem(key: string, value: any): Promise<void> {
    return figma.clientStorage.setAsync(key, value);
  }

  deleteItem(key: string): Promise<void> {
    return figma.clientStorage.setAsync(key, undefined);
  }

  setStatus(status: string) {
    figma.currentPage.selection.forEach(node => {
      if (node.type == 'FRAME') {
        if (node.name.indexOf(SEPARATOR) != -1) {
          node.name = node.name.split(SEPARATOR)[1]?.trim() || '';
        }
        node.name = `${status} ${SEPARATOR} ${node.name}`;
        node.setRelaunchData({ relaunch: '' })
      }
    });
  }

  clearStatusForSelectedFrame() {
    figma.currentPage.selection.forEach(node => {
      if (node.type == 'FRAME') {
        if (node.name.indexOf(SEPARATOR) != -1) {
          node.name = node.name.split(SEPARATOR)[1]?.trim() || '';
        }
      }
    });
  }

  updatedEmojiForAllFrames(oldEmoji: string, newEmoji: string) {
    figma.currentPage.children.forEach(node => {
      if (node.name.includes(oldEmoji)) {
        node.name = node.name.replace(oldEmoji, newEmoji);
        node.setRelaunchData({ relaunch: '' })
      }
    });
  }

  clearStatusForRemovedStatus(emoji: string) {
    figma.currentPage.children.forEach(node => {
      if (node.name.includes(emoji)) {
        node.name = node.name.split(SEPARATOR)[1]?.trim() || '';
        node.setRelaunchData({ relaunch: '' })
      }
    });
  }
}
