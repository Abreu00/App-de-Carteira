import idb from "./idb";

export default {
  async add(ticker, type, desiredPctg, quotes = 0) {
    const db = await idb.getDB();
    const price = 0;

    return new Promise((resolve) => {
      let transaction = db.transaction(["stocks"], "readwrite");
      transaction.oncomplete = () => {
        resolve();
      };

      let store = transaction.objectStore("stocks");
      store.put({ ticker, type, desiredPctg, quotes, price });
    });
  },
  async getAll() {
    const db = await idb.getDB();

    return new Promise((resolve) => {
      let transaction = db.transaction(["stocks"], "readonly");
      transaction.oncomplete = () => {
        resolve(cats);
      };

      let store = transaction.objectStore("stocks");
      let cats = [];

      store.openCursor().onsuccess = (e) => {
        let cursor = e.target.result;
        if (cursor) {
          cats.push(cursor.value);
          cursor.continue();
        }
      };
    });
  },
  async get(ticker) {
    const db = await idb.getDB();

    return new Promise((resolve) => {
      const transaction = db.transaction(["stocks"], "readonly");
      const objectStore = transaction.objectStore("stocks");
      let active;
      transaction.oncomplete = () => resolve(active);

      const request = objectStore.get(ticker);
      request.onsuccess = (event) => {
        active = event.target.result;
      };
    });
  },
  async update(ticker, property, value) {
    const oldActive = await this.get(ticker);
    const db = await idb.getDB();
    return new Promise((resolve) => {
      let transaction = db.transaction(["stocks"], "readwrite");
      let objectStore = transaction.objectStore("stocks");
      let result;
      transaction.oncomplete = () => resolve(result);

      let request = objectStore.put({
        ...oldActive,
        [property]: value,
      });
      request.onsuccess = (event) => (result = event.target.result);
    });
  },
  async len() {
    const db = await idb.getDB();
    return new Promise((resolve) => {
      let transaction = db.transaction(["stocks"], "readonly");
      let objectStore = transaction.objectStore("stocks");
      let len;
      transaction.oncomplete = () => {
        resolve(len);
      };
      let request = objectStore.count();
      request.onsuccess = (event) => (len = event.target.result);
    });
  },
  async clear() {
    const db = await idb.getDB();
    return new Promise((resolve) => {
      let transaction = db.transaction(["stocks"], "readwrite");
      let objectStore = transaction.objectStore("stocks");
      transaction.oncomplete = () => resolve();
      objectStore.clear();
    });
  },
};
