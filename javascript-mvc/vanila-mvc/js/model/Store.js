const tag = "[Store]";

export default class Store {
  constructor(storage) {
    if (!storage) throw "No Storage";

    this.storage = storage;
  }
}
