import { TabType } from "../view/TabView";

const tag = "[Controller]";

export default class Controller {
  constructor(
    store,
    {
      searchFormView,
      searchResultView,
      tabView,
      keywordListView,
      historyListView,
    }
  ) {
    console.log(tag, "constroctor");
  }
}
