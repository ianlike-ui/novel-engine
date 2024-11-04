import axios from 'axios';

// 一个执行请求的函数
const makeRequest = async ({ url, method, headers, data = {} }) => {
  try {
    const response = await axios({
      url,
      method,
      data,
      headers
    });
    //console.log('数据:', response.data);
    return response.data; // 返回响应数据
  } catch (error) {
    console.error('请求错误:', error);
    throw error; // 抛出错误以便在调用时处理
  }
};
/*
// 用法示例
makeRequest({ 
  url: 'https://baidu.com/', 
  method: 'GET', 
  data: { key: 'value' } 
})
  .then(data => {
    // 处理获取到的数据
    console.log(data.substring(0, 100));
  })
  .catch(error => {
    // 处理错误
  });
*/
export default makeRequest;