import Controller from "./controller/Controller";
import Store from "./model/Store";
import storage from "./storage";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main");

  const store = new Store(storage);

  const views = {};

  new Controller(store, views);
}
