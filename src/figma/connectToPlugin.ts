import { connectToPlugin, ProxyMapRemoteApi, proxyMapRemote } from 'rpct/browser';
import { PluginMethods } from './plugin-methods';
import { UIMethods } from './ui-methods';

// eslint-disable-next-line import/no-mutable-exports
export let pluginApi: ProxyMapRemoteApi<PluginMethods>;
let apiLoadingPromise: Promise<void>;

export const initApi = () => {
  if (apiLoadingPromise !== undefined) return apiLoadingPromise;

  if (!pluginApi) {
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
