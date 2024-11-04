import axios from 'axios';

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data; // 返回请求的数据
    } catch (error) {
        console.error('请求错误:', error);
        throw error; // 抛出错误以便于处理
    }
}

