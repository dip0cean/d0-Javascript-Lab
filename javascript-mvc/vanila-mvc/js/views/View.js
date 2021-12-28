import { emit, on } from "../helpers.js";

const tag = "[View]";

/**
 * 모든 View 의 부모 역할을 하는 부모 클래스
 */
export default class View {
  /**
   * 자식 View 들을 관리하기 위해 Element 인자를 파라미터로 받는다.
   * 
   * @param {*} element View 가 관리할 Element 인자
   * @returns 
   */
  constructor(element) {
    console.log(tag, "constructor");

    if (!element) throw "No Element";

    this.element = element;
    this.originalDisplay = this.element.style.display || "";

    return this;
  }

  /**
   * 현재 자식 View (Element 요소)를 숨긴다.
   * 
   * @returns View
   */
  hide() {
    this.element.style.display = "none";
    return this;
  }

  /**
   * 현재 자식 View (Element 요소)를 표시한다.
   * 
   * @returns View
   */
  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  /**
   * 사용자의 행동에 대해 반응하기 위한 유틸리티 성 함수
   * 
   * @param {*} eventName 이벤트 종류
   * @param {*} handler 발생시킬 이벤트 핸들러
   * @returns 
   */
  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }

  /**
   * 이벤트 발생하기 위한 유틸리티 성 함수
   * 
   * @param {*} eventName 이벤트 종류
   * @param {*} data 
   * @returns 
   */
  emit(eventName, data) {
    emit(this.element, eventName, data);
    return this;
  }
}
