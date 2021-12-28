const tag = "[Store]";

export default class Store {
  /**
   * Model 역할을 하는 storage 를 파라미터로 받아온다.
   * 즉, Store 는 하나의 Entity, Domain 이라고 볼 수 있다.
   *
   * @param {*} storage Model
   */
  constructor(storage) {
    console.log(tag, "Store");
    if (!storage) throw "No Storage";

    this.storage = storage;
  }
}
