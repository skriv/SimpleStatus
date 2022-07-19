import {
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  SEPARATOR
} from '../config';
import { initApi } from './connection';

(async function () {
  figma.showUI(__html__, {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  });

  // wait for UI
  await new Promise(x => setTimeout(x, 1000));
  await initApi();
}());
