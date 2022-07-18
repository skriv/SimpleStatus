/* eslint-disable @typescript-eslint/no-explicit-any */
import { watchProperty } from 'rpct/browser';
import { isEqualNodeArray } from './utils/utils';
import { testHttp } from './utils/http';

export const selectionWatcher = watchProperty(() => figma.currentPage.selection, {
  isEqual: isEqualNodeArray,
});


type SelectionChangeCallback = (nodeIds: string[]) => void;

export class PluginMethods {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [methodName: string]: (...args: any[]) => any;

  createRectangle(width: number, height: number): string {
    const rect = figma.createRectangle();
    rect.resize(width, height);
    figma.currentPage.appendChild(rect);
    return rect.id;
  }

  getItem(key: string): Promise<any | undefined> {
    return figma.clientStorage.getAsync(key);
  }

  setItem(key: string, value: any): Promise<void> {
    return figma.clientStorage.setAsync(key, value);
  }

  deleteItem(key: string): Promise<void> {
    // deleteAsync API 不见啦？
    return figma.clientStorage.setAsync(key, undefined);
  }

  listenSelectionChange(onSelectionChange: SelectionChangeCallback) {
    selectionWatcher.on('change', (selection) => {
      onSelectionChange(selection.map(x => x.id));
    });
  }

  testHttp(index: number) {
    return testHttp(index);
  }

  addBlock(parentId?: string) {
    const container = parentId ? figma.getNodeById(parentId) as FrameNode : figma.createFrame();
    if (container) {
      container.layoutMode = 'HORIZONTAL';
      const nodes = container.children;
      const rect = figma.createRectangle();
      rect.resize(100, 100);
      rect.x = nodes.length * 250;
      rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
      container.appendChild(rect);
      return container.id;
    }
  }

  subBlock(parentId: string) {
    const container = figma.getNodeById(parentId);
    if (container) {
      const nodes = (container as FrameNode).children;
      nodes[nodes.length - 1].remove();
    }
  }
}
