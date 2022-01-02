import { TabType } from "../views/TabView.js";

const tag = "[Store]";

export default class Store {
  /**
   * Model 역할을 하는 storage 를 파라미터로 받아온다.
   * 즉, Store 는 하나의 Entity, Domain 이라고 볼 수 있다.
   *
   * @param {*} storage Model
   */
  constructor(storage) {
    console.log(tag, "constructor");
    if (!storage) throw "No Storage";

    this.storage = storage;

    this.searchKeyword = ""; // 검색어
    this.searchResult = []; // 검색 결과
    this.selectedTab = TabType.KEYWORD; // 기본 탭타입
  }

  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
    console.log(tag, "search", this.searchResult);
  }
}
