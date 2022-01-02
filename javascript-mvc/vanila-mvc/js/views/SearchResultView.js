import { qs } from "../helpers.js";
import View from "./View.js";

export default class SearchResultView extends View {
  constructor() {
    super(qs("#search-result-view"));

    this.template = new Template();
  }

  /**
   * 검색 결과에 따라서 동적으로 DOM 을 표시해줘야 한다.
   *
   * @param {*} data 검색 결과
   */
  show(data = []) {
    this.element.innerHTML =
      data.length > 0
        ? this.template.getList(data)
        : this.template.getEmptyMessage();
    super.show();
  }
}

// DOM 을 만드는 요소
class Template {
  getList(data) {
    return `
        <ul class="result">
            ${data.map(this._getItem).join("")}
        </ul>
    `;
  }

  getEmptyMessage() {
    return `
        <div class="empty-box">검색 결과가 없습니다.</div>
    `;
  }

  _getItem({ imageUrl, name }) {
    return `
        <li>
            <img src="${imageUrl}" alt="${name}" />
            <p>${name}</p>
        </li>
    `;
  }
}
