import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

/*
    요구사항
    1. 검색 폼을 노출한다.

    2. 검색어를 입력하면 X 버튼 노출 / 검색어가 없으면 X 버튼 숨김
        > 검색어를 입력한다는 것은 사용자의 인터렉션
            > 사용자 인터렉션은 DOM Event 발생
                > DOM 과 직접적으로 일하는 계층은 MVC 패턴에서 View 의 역할
    
    3. Enter 를 입력하면 검색 결과가 보인다.
        > form 태그가 있는 경우, Enter 키를 입력하면 submit 이벤트가 발생한다.
            > submit 이벤트에 핸들러를 추가한다.
        > 검색 결과 표시는 과연 SearchFormView 의 역할일까?
            > 다른 컴포넌트에게 위임하는 것이 맞다. 왜?
    4. X 버튼을 클릭하거나 검색어를 삭제하면 검색 결과를 삭제한다.
*/
export default class SearchFormView extends View {
  constructor() {
    // 상속하고 있는 View 의 생성자 호출, View 생성자는 Element 를 인자로 받는다.
    super(qs("#search-form-view"));

    // View 의 this.element(== #search-form-view 하위 태그) 중
    this.inputElement = qs("[type=text]", this.element); // type 이 text 인 태그 찾기
    this.resetElement = qs("[type=reset]", this.element); // type 이 reset 인 태그 찾기

    // SearchFormView 클래스가 객체로 생성될 때
    this.showResetButton(false); // X 버튼은 숨김처리 한다.
    this.bindEvents(); // helper.js 의 on() 메소드를 이용해서 keyup 이벤트를 생성한다.
  }

  /**
   * X 버튼 노출 여부를 설정한다.
   *
   * @param {*} visible on/off 인자
   */
  showResetButton(visible = true) {
    // DOM 을 이용해서 X 버튼으로 지정된 태그의 style.display 값을 변경한다.
    this.resetElement.style.display = visible ? "block" : "none";
  }

  /**
   * 1. 키보드 입력 시, 발생되는 이벤트를 검색창 태그에 생성한다.
   * 2. Enter 입력 시, submit 이벤트 발생을 막는다.
   */
  bindEvents() {
    // DOM 을 이용해서 검색창으로 지정된 태그에 keyup 이벤트를 생성한다.
    // 이 때, 생성되는 이벤트는 SearchFormView 클래스의 handleKeyup() 메소드로 설정한다.
    on(this.inputElement, "keyup", () => this.handleKeyup());

    // X 버튼 클릭 시, 검색어 삭제 처리
    on(this.resetElement, "click", () => this.handleReset());

    // Enter 를 입력했을 때, handleSubmit() 메소드를 호출하는 이벤트를 생성한다.
    this.on("submit", (event) => this.handleSubmit(event));
  }

  /**
   * 검색창에 검색어 입력 시, 입력된 문자열을 기준으로 X 버튼 노출여부를 설정한다.
   */
  handleKeyup() {
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);

    if (value.length <= 0) {
      this.handleReset();
    }
  }

  handleReset() {
    console.log(tag, "handleReset");
    this.showResetButton(false);
    this.emit("@reset");
  }

  /**
   * form 태그의 submit 이벤트를 막는다.
   *
   * @param {*} event #search-form-view 태그의 event 객체
   */
  handleSubmit(event) {
    event.preventDefault();
    console.log(tag, "handleSubmit");

    // 입력한 검색어
    const { value } = this.inputElement;
    // @submit > Custom Event
    this.emit("@submit", { value });
  }
}
