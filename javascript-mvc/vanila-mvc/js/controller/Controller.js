const tag = "[Controller]";

/*
    요구사항
    1. 검색 결과가 검색폼 아래 위치한다. 검색 결과가 없을 경우와 있을 경우를 구분한다.
    2. X 버튼을 클릭하면 검색폼이 초기화되고, 검색 결과가 사라진다.
*/
export default class Controller {
  constructor(store, { searchFormView, searchResultView }) {
    console.log(tag, "Controller");
    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;

    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    // SearchFormView 가 상속 받고 있는 View 의 on() 메소드
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", () => this.reset());
  }

  search(searchKeyword) {
    console.log(tag, searchKeyword);
    this.store.search(searchKeyword);
    this.render();
  }

  reset() {
    console.log(tag, "reset");
    // this.search() 메소드를 사용하면 안되는건지?
    // this.search("");
    this.store.searchKeyword = "";
    this.store.searchResult = [];
    this.render();
  }

  render() {
    // 컨트롤러가 관리하고 있는 View 들을 이용해 화면에 출력하도록 한다.
    if (this.store.searchKeyword.length > 0) {
      this.searchResultView.show(this.store.searchResult);
      return;
    }

    this.searchResultView.hide();
  }
}
