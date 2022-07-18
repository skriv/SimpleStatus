import { uiApi } from '../connection';


export async function testHttp(index: number): Promise<string> {
  try {
    const rsp = await uiApi.request({
      url: `https://jsonplaceholder.typicode.com/todos/${index}`,
    });
    return rsp.title;
  } catch (error) {
    console.error(error);
    return Promise.resolve('请求失败');
  }
}
