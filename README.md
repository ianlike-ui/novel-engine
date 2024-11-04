# novel-engine
---
## parse.json

### Description

This is the parse.json file for the novel engine. It contains all the necessary information for the engine to work.

### Structure

```json
{
    "version": "1.0.0",
    "author": "Ian",
    "last_updated": "2024-10-25",
    "description": "This is the parse.json file for the novel engine.",
    "main": [
        {
            "name": "kpkpo",
            "base_Url": "https://www.novelapi-tn.kpkpo.com",
            "search": {
                "method": "GET",
                "g_data": [
                    "keyword",
                    "return '';"
                ],//@param searchKey; @return {key_1:'value_1',...};
                "g_searchUrl": [
                    "keyword",
                    "data",
                    "return {searchUrl:'https://www.novelapi-tn.kpkpo.com/h5/search?word='+keyword,data:data};"
                ],//@param searchKey; @return {searchUrl:'https://www.novelapi-tn.kpkpo.com/search?q=searchKey',data:{}};
                "h_data": [
                    "data",
                    "return $('.weui-cell.favorite').map((index, element) => {
                        const title = $(element).find('.weui-flex__item').first().text(); // 小说标题
                        const author = $(element).find('.type span').first().text(); // 作者
                        const imgUrl = $(element).find('.cover img').attr('src'); // 封面图片链接
                        const description = $(element).find('.desc span').text(); // 简介
                        const score = $(element).find('.score').text(); // 评分
                        const bookUrl = $(element).find('a').attr('href'); // 链接

                        return {
                            title,
                            author,
                            imgUrl,
                            description,
                            score,
                            bookUrl, // 直接存储链接
                        };
                    }).get(); // .get()将jQuery对象转换为普通数组"
                ]/*@param data($); @return {name:'kpkpo',searchResult: [{title:'',bookUrl:'',author:'',description:'',imgUrl:'',score:'',}],resultNum:'',page:'',};*/
            },
            "nextSearch": {
                "method": "GET",
                "g_data": [
                    "keyword",
                    "page",
                    "return ;"
                ],//@param {searchKey,page}; @return {key_1:'value_1',...};
                "g_searchUrl": [
                    "keyword",
                    "data",
                    "page",
                    
                    "return keyword;"
                ],//@param {searchKey,page,data}; @return {searchUrl:'https://www.novelapi-tn.kpkpo.com/search?q=searchKey&page=page',method:'GET',data:{}};
                "h_data": [
                    "data",
                    "page",
                    "return data;"
                ]/*@param data($); @return {name:'kpkpo',searchResult: [{title:'',bookUrl:'',author:'',description:'',imgUrl:'',score:'',}],resultNum:'',page:'',};*/
            },
            "specific": {
                "method": "GET",
                "g_data": [
                    "keyword",
                    "return ;"
                ],//@param bookUrl; @return {key_1:'value_1',...};
                "g_searchUrl": [
                    "url",
                    "data",
                    "return url;"
                ],//@param bookUrl,data; @return {searchUrl:'https://www.novelapi-tn.kpkpo.com/book/url',method:'GET',data:{}};
                "h_data": [
                    "data",
                    "return data;"
                ]/*@param data($); @return {name:'kpkpo',bookUrl:'',title:'',author:'',description:'',imgUrl:'',score:'',chapterUrl:'',similiarBooks:[{title:'',bookUrl:'',author:'',description:'',imgUrl:'',score:''},...],};*/
            },
            "chapterList": {
                "method": "GET",
                "g_data": [
                    "keyword",
                    "return ;"
                ],//@param chapterUrl; @return {key_1:'value_1',...};
                "g_searchUrl": [
                    "url",
                    "data",
                    "return url;"
                ],//@param chapterUrl,data; @return {searchUrl:'https://www.novelapi-tn.kpkpo.com/chapter/url',method:'GET',data:{}};
                "h_data": [
                    "data",
                    "return data;"
                ]/*@param data($); @return {name:'kpkpo',chapters:[{id,'',title:'',url:'',},...],};*/
            },
            "content": {
                "method": "GET",
                "g_data": [
                    "keyword",
                    "return ;"
                ],//@param contentUrl; @return {key_1:'value_1',...};
                "g_searchUrl": [
                    "url",
                    "data",
                    "return url;"
                ],//@param contentUrl,data; @return {searchUrl:'https://www.novelapi-tn.kpkpo.com/content/url',method:'GET',data:{}};
                "h_data": [
                    "data",
                    "return data;"
                ]/*@param data($); @return {name:'kpkpo',title:'',content:'',};*/
            },
            "recommendations": {
                "method": "GET",
                "g_data": [
                    "return ;"
                ],//@param ; @return {key_1:'value_1',...};
                "g_searchUrl": [
                    "url",
                    "data",
                    "return url;"
                ],//@param url,data; @return {searchUrl:'https://www.novelapi-tn.kpkpo.com/recommendations',method:'GET',data:{}};
                "h_data": [
                    "data",
                    "return data;"
                ]/*@param data($); @return {name:'kpkpo',recommendations:[{title:'',bookUrl:'',author:'',description:'',imgUrl:'',score:'',},...],};*/
            },
            "categories": {
                "method": "GET",
                "g_data": [
                    "keyword",
                    "return ;"
                ],//@param categoryUrl; @return {key_1:'value_1',...};
                "g_searchUrl": [
                    "url",
                    "data",
                    "return url;"
                ],//@param categoryUrl,data; @return {searchUrl:'https://www.novelapi-tn.kpkpo.com/categories/categoryUrl',method:'GET',data:{}};
                "h_data": [
                    "data",
                    "return data;"
                ]/*@param data($); @return {name:'kpkpo',columns:[{title:'',Url:''},...],};*/
            },
            "categorieBooks": {
                "method": "GET",
                "g_data": [
                    "keyword",
                    "return ;"
                ],//@param categoryUrl; @return {key_1:'value_1',...};
                "g_searchUrl": [
                    "url",
                    "data",
                    "category",
                    "return url;"
                ],///@param categoryUrl,data,category; @return {searchUrl:'https://www.novelapi-tn.kpkpo.com/categories/categoryUrl/category',method:'GET',data:{}};
                "h_data": [
                    "data",
                    "return data;"
                ]/*@param data($); @return {name:'kpkpo',books:[{title:'',bookUrl:'',author:'',description:'',imgUrl:'',score:'',},...],};*/
            }
        }
    ]
}  


```

---