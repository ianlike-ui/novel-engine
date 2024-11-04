import * as cheerio from 'cheerio';
import makeRequest from './request.js';
import parse from './parse.json' assert { type: "json" };
import config from './config.json' assert { type: "json" };



// Method 类用于处理搜索请求和数据解析
class Method {

    // 构造函数接收名称和解析参数
    constructor(name, parse) {
        this.parse = parse;
        this.name = name;
        // console.log(this.name)

        // 根据配置决定是否使用请求
        if (config.useRequest) {
            // 定义搜索方法
            this.get =async function (keyword) {
                var method = this.parse.method

                const url = this.g_searchUrl(keyword);

                const options = {
                    method,
                    url: url.searchUrl,
                    data: this.g_data(keyword),
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
                    }
                };

                // 使用 axios 发起请求
                return this.h_data(await makeRequest(options))
                   

            }
        }
    }

    // 生成请求数据
    g_data(keyword) {
        const m_data = new Function(...this.parse['g_data']);
        return m_data(...keyword);
    }

    // 生成搜索 URL
    g_searchUrl(keyword) {
        const m_searchUrl = new Function(...this.parse['g_searchUrl']);
        return m_searchUrl(...keyword);
    }

    // 处理并解析 HTML 数据
    h_data(html) {
        const $ = cheerio.load(html);
        const m_result = new Function(...this.parse['h_data']);
        return m_result($);
    }
}

// 创建 Method 实例用于测试
/*
var test = new Method('n', parse.main[0]['content']);
test.get(['/h5/book-chapter-id-656904-chapter_id-3693548']).then(data => {
    console.log(data);
})
*/
export default Method;