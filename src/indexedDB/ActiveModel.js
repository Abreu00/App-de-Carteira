import idb from "./idb";

export default {
  async add(ticker, type, desiredPctg, quotes = 0) {
    let db = await idb.getDB();

    return new Promise(resolve => {
      let transaction = db.transaction(["stocks"], "readwrite");
      transaction.oncomplete = () => {
        resolve();
      };

      let store = transaction.objectStore("stocks");
      store.put({ ticker, type, desiredPctg, quotes });
    });
  },
  async getAll() {
    let db = await idb.getDB();

    return new Promise(resolve => {
      let transaction = db.transaction(["stocks"], "readonly");
      transaction.oncomplete = () => {
        resolve(cats);
      };

      let store = transaction.objectStore("stocks");
      let cats = [];

      store.openCursor().onsuccess = e => {
        let cursor = e.target.result;
        if (cursor) {
          cats.push(cursor.value);
          cursor.continue();
        }
      };
    });
  },
  async update() {
    let db = await idb.getDB();
    return new Promise(resolve => {
      let transaction = db.transaction(["stocks"], "readwrite");
      let objectStore = transaction.objectStore("stocks");
      transaction.oncomplete = () => resolve();

      let request = objectStore.put({
        ticker: "ABEV3",
        quotes: 20
      });
      request.onsuccess = event => console.log(event.target);
    });
  },
  async len() {
    let db = await idb.getDB();
    return new Promise(resolve => {
      let transaction = db.transaction(["stocks"], "readonly");
      let objectStore = transaction.objectStore("stocks");
      let len;
      transaction.oncomplete = () => {
        resolve(len);
      };
      let request = objectStore.count();
      request.onsuccess = event => (len = event.target.result);
    });
  }
};
