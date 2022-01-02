import { qs } from "../helpers.js";
import View from "./View.js";

export default class KeywordListView extends View {
  constructor() {
    super(qs("#keyword-list-view"));
    this.template = new Template();
  }

  show(data = []) {
    this.element.innerHTML =
      data.length > 0
        ? this.template.getKeywordList(data)
        : this.template.getEmptyMessage();
    super.show();
  }
}

class Template {
  getEmptyMessage() {
    return `<div>추천 키워드가 존재하지 않습니다.</div>`;
  }

  getKeywordList(data = []) {
    return `
        <ul class="list">
            ${data.map(this._getKeyword).join("")}
        </ul>
    `;
  }

  _getKeyword({ id, keyword }) {
    return `
        <li>
            <span class="number">${id}</span>
            ${keyword}
        </li>
    `;
  }
}
