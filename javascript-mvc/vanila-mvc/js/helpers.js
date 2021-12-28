/**
 * (DOM API) querySelector 함수를 호출
 *
 * @param {*} selector
 * @param {*} scope Root Element
 * @returns
 */
export function qs(selector, scope = document) {
  if (!selector) throw "No Selector";

  return scope.querySelector(selector);
}

/**
 * (DOM API) querySelectoreAll 함수를 호출, 여러 개의 Element (유사 배열) 를 다루기 때문에 Array 사용
 *
 * @param {*} selector
 * @param {*} scope Root Element
 * @returns
 */
export function qsAll(selector, scope = document) {
  if (!selector) throw "No Selector";

  return Array.from(scope.querySelectorAll(selector));
}

/**
 * (DOM API) addEventListener() 함수를 사용하여, 수신한 이벤트가 발행되면 해당 이벤트를 수행한다.
 * 
 * @param {*} target 
 * @param {*} eventName 
 * @param {*} handler 
 */
export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}

/**
 * (DOM API)
 * 인자로 받은 handler 를 그대로 사용하지 않고, emitEvnet로 감싼다.
 * 모든 Element 를 찾고, 해당 Element 를 순회하면서 이벤트를 발생시킨 Element 와 같은지 확인한다.
 * 즉, 해당 함수는 특정 Element 하위에 있는 자식 Element 들을 처리하기 위해 사용한다.
 * 
 * @param {*} target 
 * @param {*} eventName 
 * @param {*} selector 
 * @param {*} handler 
 */
export function delegate(target, eventName, selector, handler) {
  const emitEvent = (event) => {
    const potentialElements = qsAll(selector, target);

    for (const potentialElement of potentialElements) {
      if (potentialElement === event.target) {
        return handler.call(event.target, event);
      }
    }
  };

  on(target, eventName, emitEvent);
}

/**
 * (DOM API) 이벤트를 발행하기 위한 함수
 * 
 * @param {*} target 
 * @param {*} eventName 
 * @param {*} detail 
 */
export function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}

/**
 * Date 객체를 받아서 상대적인 시간을 반환하는 유틸리티 함수
 * 
 * @param {*} date 
 * @returns 
 */
export function formatRelativeDate(date = new Date()) {
  const TEN_SECOND = 10 * 1000;
  const A_MINUTE = 60 * 1000;
  const A_HOUR = 60 * A_MINUTE;
  const A_DAY = 24 * A_HOUR;

  const diff = new Date() - date;

  if (diff < TEN_SECOND) return `방금 전`;
  if (diff < A_MINUTE) return `${Math.floor(diff / 1000)}초 전`;
  if (diff < A_HOUR) return `${Math.floor(diff / 1000 / 60)}분 전`;
  if (diff < A_DAY) return `${Math.floor(diff / 1000 / 60 / 24)}시간 전`;

  return date.toLocaleString("ko-KR", {
    hour12: false,
    dateStyle: "medium",
  });
}

/**
 * 과거 날짜 반환을 위한 유틸리티 함수
 * 
 * @param {*} date 
 * @param {*} now 
 * @returns 
 */
export function createPastDate(date = 1, now = new Date()) {
  if (date < 1) throw "date 값은 1 이상힙니다.";

  const yesterday = new Date(now.setDate(now.getDate() - 1));
  if (date === 1) return yesterday;

  return createPastDate(date - 1, yesterday);
}

/**
 * ID 생성을 위한 유틸리티 함수
 * 
 * @param {*} list 
 * @returns 
 */
export function createNextId(list = []) {
  return Math.max(...list.map((item) => item.id)) + 1;
}
