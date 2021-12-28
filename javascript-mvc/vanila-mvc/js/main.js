import Controller from "./controller/Controller";
import Store from "./model/Store";
import storage from "./storage";
import HistoryListView from "./view/HistoryListView";
import KeywordListView from "./view/KeywordListView";
import SearchFormView from "./view/SearchFormView";
import SearchResultView from "./view/SearchResultView";
import TabView from "./view/TabView";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main");

  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView(),
    searchResultView: new SearchResultView(),
    tabView: new TabView(),
    keywordListView: new KeywordListView(),
    historyListView: new HistoryListView(),
  };

  new Controller(store, views);
}
