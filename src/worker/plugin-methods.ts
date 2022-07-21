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

  clearStatusFromFrame() {
    figma.currentPage.selection.forEach(node => {
      if (node.type == 'FRAME') {
        if (node.name.indexOf(SEPARATOR) != -1) {
          node.name = node.name.split(SEPARATOR)[1]?.trim() || '';
        }
      }
    });
  }

  updatedStatusesFroAllFrames() {
    console.log(figma.currentPage);
  }
}
