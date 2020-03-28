const DB_NAME = "APP_DB";
const DB_VERSION = 2;
let DB;

export default {
  async getDB() {
    return new Promise((resolve, reject) => {
      if (DB) return resolve(DB);
      let request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        reject("Error");
      };

      request.onsuccess = e => {
        DB = e.target.result;
        resolve(DB);
      };

      request.onupgradeneeded = e => {
        let db = e.target.result;
        if (e.oldVersion < 1) {
          db.createObjectStore("stocks", {
            keyPath: "key",
            autoIncrement: true
          });
        } else if (e.oldVersion < 2) {
          db.deleteObjectStore("stocks");
          db.createObjectStore("stocks", {
            keyPath: "ticker"
          });
        }
      };
    });
  }
};
