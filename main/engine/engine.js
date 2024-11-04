import parse from './parse.json' assert { type: "json" };
import Source from './source.js';

// 引擎类，用于管理数据源及其操作
class Engine {
  constructor() {
    this.parse = parse;
    this.sources = {};

    // 初始化源，遍历解析数据的主字段
    for (var each in this.parse.main){
        this.sources[each] = new Source(this.parse.main[each]);
    }
    this.disableSources = [];
  }

  // 获取指定名称的数据源
  getSource(name) {

    return this.sources[name]? this.sources[name] : function(...args){console.error(`Source ${name} not found`)};
  }

  // 获取所有数据源的名称列表
  getSourcesList() {
    return Object.keys(this.sources);
  }

  // 获取可用的推荐数据源
  availableRecommendations() {
    return this.getSourcesList().filter(source => source.recommendations);
  }

  // 获取可用的类别数据源
  availableCategories() {
    return this.getSourcesList().filter(source => source.categories);
  }

  // 执行全局搜索，查找符合查询条件的书籍
  globalSearch(query) {
    let results = [];
    for (let source in this.sources) {
        if (this.disableSources.includes(source)) {
          continue;
        }
        let sourceResults = this.sources[source].searchBookByKeyword([query]);
        if (sourceResults) {
            results.push({ name: source, results: sourceResults });
        }
    }
    return results;
  }

  // 获取特定书籍的信息
  globalSpecific(source, url) {
    if (this.disableSources.includes(source)) {
        console.log(`Source ${source} is disabled`);
        return;
    }
    return this.sources[source].getBookInfoByUrl([url]);
  }

  // 禁用指定的数据源
  disableSource(source) {
    this.disableSources.push(source);
  }

  // 启用指定的数据源
  enableSource(source) {
    this.disableSources = this.disableSources.filter(s => s!== source);
  }

  // 获取指定数据源的章节列表
  globalChapterList(source, url) {
    if (this.disableSources.includes(source)) {
      console.log(`Source ${source} is disabled`);
      return;
    }
    return this.sources[source].getChapterListByUrl([url]);
  }

  // 获取指定数据源的章节内容
  globalContent(source, url) {
    if (this.disableSources.includes(source)) {
      console.log(`Source ${source} is disabled`);
      return;
    }
    return this.sources[source].getChapters([url]);
  }

  // 获取推荐的书籍
  globalRecommendations(source) {
    if (this.disableSources.includes(source)  ||!this.sources[source].recommendations) {
      console.log(`Source ${source} is disabled`);
      return;
    }
    return this.sources[source].recommendations();
  }

  // 获取指定数据源的类别列表
  getCategoryList(source) {
    if (this.disableSources.includes(source) ||!this.sources[source].categories) {
      console.log(`Source ${source} is disabled`);
      return;
    }
    return this.sources[source].categories();
  }
  
  // 获取指定类别的书籍内容
  getCategoryContent(source, category) {
    if (this.disableSources.includes(source) ||!this.sources[source].categories) {
      console.log(`Source ${source} is disabled`);
      return;
    }
    return this.sources[source].categoryBooks(category);
  }

}

export default Engine;


var engine = new Engine();

const i = engine.globalSearch('修仙')[0]['results']

i.then((result) => {console.log(result)})   