import { connectToPlugin, proxyMapRemote, ProxyMapRemoteApi } from 'rpct/browser';
import { PluginMethods } from '../worker/plugin-methods';
import { UIMethods } from './ui-methods';

// eslint-disable-next-line import/no-mutable-exports
export let pluginApi: ProxyMapRemoteApi<PluginMethods>;
let apiLoadingPromise: Promise<void>;

export const initApi = () => {
  if (apiLoadingPromise !== undefined) return apiLoadingPromise;

  if (!pluginApi) {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
    apiLoadingPromise = new Promise(async (loaded) => {
      // @ts-ignore
      const rpctapi = await connectToPlugin<PluginMethods, UIMethods>(new UIMethods());
      // @ts-ignore
      pluginApi = proxyMapRemote(rpctapi);

      loaded();
    });

    return apiLoadingPromise;
  }
};
