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
        const originalName = node.name.split(SEPARATOR)[1]?.trim() || '';
        if (node.name.indexOf(SEPARATOR) != -1) {
          node.name = originalName;
        }
        node.name = `${status} ${SEPARATOR} ${node.name}`;
        node.setRelaunchData({ relaunch: '' })
      }
    });
  }
}
