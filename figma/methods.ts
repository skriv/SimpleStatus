import {
  SEPARATOR
} from './config'

export function getData(key: string) {
  return figma.clientStorage.getAsync(key);
}

export function setData(key: string, value: any) {
  figma.clientStorage.setAsync(key, value);
}

export function deleteData(key: string) {
  figma.clientStorage.setAsync(key, undefined);
}

export function setStatus(status: string) {
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

export function clearStatusForSelectedFrame() {
  figma.currentPage.selection.forEach(node => {
    if (node.type == 'FRAME') {
      if (node.name.indexOf(SEPARATOR) != -1) {
        node.name = node.name.split(SEPARATOR)[1]?.trim() || '';
      }
    }
  });
}

export function updateStatuses(oldValue: string, newValue: string) {
  figma.currentPage.children.forEach(node => {
    if (node.name.includes(oldValue)) {
      node.name = node.name.replace(oldValue, newValue);
      node.setRelaunchData({ relaunch: '' })
    }
  });
}

export function clearStatusForRemovedStatus(emoji: string) {
  figma.currentPage.children.forEach(node => {
    if (node.name.includes(emoji)) {
      node.name = node.name.split(SEPARATOR)[1]?.trim() || '';
      node.setRelaunchData({ relaunch: '' })
    }
  });
}
