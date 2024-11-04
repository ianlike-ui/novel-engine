import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs'; // 引入fs模块

async function fetchNovels(url) {
    try {
        // 发送get请求获取页面内容
        const { data } = await axios.get(url);
        
        // 使用cheerio解析HTML
        const $ = cheerio.load(data);
        
        const novels = [];

        // 遍历每本小说的HTML结构
        $('.weui-cell.favorite').each((index, element) => {
            const title = $(element).find('.weui-flex__item').first().text(); // 小说标题
            const author = $(element).find('.type span').first().text(); // 作者
            const imageLink = $(element).find('.cover img').attr('src'); // 封面图片链接
            const description = $(element).find('.desc span').text(); // 简介
            const score = $(element).find('.score').text(); // 评分
            const link = $(element).find('a').attr('href'); // 链接

            novels.push({
                title,
                author,
                imageLink,
                description,
                score,
                link // 直接存储链接
            });
        });

        // 将提取的数据显示在控制台
        console.log(novels);

        // 将提取到的小说数据写入 JSON 文件
        fs.writeFileSync('novels.json', JSON.stringify(novels, null, 2), 'utf-8');
        console.log('小说数据已保存到 novels.json');

    } catch (error) {
        console.error('请求错误:', error);
    }
}

// 调用函数，输入您的目标网页URL
fetchNovels('https://novelapi-tn.kpkpo.com/h5/search?word=%E4%BF%AE%E4%BB%99'); // 替换为您的HTML页面的URL
