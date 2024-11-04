import Method from "./method.js";
import parse from './parse.json' assert { type: "json" };


class Source {
  constructor(parse) {
    this.parse = parse;
    this.name = parse.name;
    this.baseUrl = parse.baseUrl;
    for (var each in parse) {
      if (each == 'name' || each == 'baseUrl') continue;
      this[each] = new Method(this.name,parse[each]);

    }
    if (!(this.search && this.specific && this.chapterList && this.content)) {
      console.error("Source must have search, specific , chapterList and content methods");
    }
    

  }
  // @param {string} keyword
  // @return {Promise<Array<Book>>}
  searchBookByKeyword(keyword) {
    return this.search.get(keyword);
  }

  getBookInfoByUrl(url) {
    return this.specific.get(url);
  }

  getChapterListByUrl(url) {
    return this.chapterList.get(url);
  }

  getChapters(url) {
    return this.content.get(url)

  }

}

//var source = new Source(parse.main[0])

//source.getChapters(['/h5/book-chapter-id-68392-chapter_id-3679014']).then(books => {
  //console.log(books)
//})
 
export default Source;