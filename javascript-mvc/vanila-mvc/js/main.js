import Controller from "./controller/Controller.js";
import Store from "./model/Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";
import SearchResultView from "./views/SearchResultView.js";
import TabView from "./views/TabView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  /*
    MVC 패턴의 각 계층을 초기화하는 역할
   */
  console.log(tag, "main");

  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView(),
    searchResultView: new SearchResultView(),
    tabView: new TabView(),
  };

  new Controller(store, views);
}
