import { connectToUI, ProxyMapRemoteApi, proxyMapRemote } from 'rpct/browser';
import { PluginMethods } from './plugin-methods';
import { UIMethods } from './ui-methods';

// eslint-disable-next-line import/no-mutable-exports
export let uiApi: ProxyMapRemoteApi<UIMethods>;
let apiLoadingPromise: Promise<void>;

export const initApi = () => {
  if (apiLoadingPromise !== undefined) return apiLoadingPromise;

  if (!uiApi) {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
    apiLoadingPromise = new Promise(async (loaded) => {
      // @ts-ignore
      const rpctapi = await connectToUI<PluginMethods, UIMethods>(figma, new PluginMethods());
      uiApi = proxyMapRemote(rpctapi);
      loaded();
    });

    return apiLoadingPromise;
  }
};
