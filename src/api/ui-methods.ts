import { DefaultMethodMap } from 'rpct/browser';
import { http, RequestParams } from '../utils/http';

export class UIMethods implements DefaultMethodMap {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [methodName: string]: (...args: any[]) => any;

  async request(params: RequestParams) {
    const rsp = http.request(params);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (rsp as any).data;
  }
}
