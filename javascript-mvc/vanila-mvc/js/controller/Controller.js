const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag, "Controller");
    this.store = store;

    this.searchFormView = searchFormView;

    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    // SearchFormView 가 상속 받고 있는 View 의 on() 메소드
    this.searchFormView.on("@submit", (event) =>
      this.search(event.detail.value)
    );
  }

  search(keyword) {
    console.log(tag, keyword);
  }
}
