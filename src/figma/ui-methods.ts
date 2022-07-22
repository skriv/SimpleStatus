import { DefaultMethodMap } from 'rpct/browser';

export class UIMethods implements DefaultMethodMap {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [methodName: string]: (...args: any[]) => any;
}
