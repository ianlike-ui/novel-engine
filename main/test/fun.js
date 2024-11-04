import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs'; // 引入 fs 模块
import { title } from 'process';



async function fetchData() {
    try {
        const response = await axios.get('https://novelapi-tn.kpkpo.com/h5/book-chapter-id-656904-chapter_id-3693548'); // 替换为你的 HTML 文件 URL
        const html = response.data;
        const $ = cheerio.load(html);
        const body = new Function('$',`const content = $('article.js-article').text().trim();const title = $('h4.title').text().trim();const data = {name: 'kpkpo',title: title,content: content};return data;
        `)
        

        // 保存为 JSON 文件
        fs.writeFileSync('output.json', JSON.stringify(body($), null, 2));
        console.log('Data saved to output.json');
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();