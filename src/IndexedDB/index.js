const DB_NAME = "APP_DB";
const DB_VERSION = 1;
let DB;

export default {
  async getDB() {
    return new Promise((resolve, reject) => {
      if (DB) return resolve(DB);
      let request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = e => {
        console.log("Error opening DB", e);
        reject("Error");
      };

      request.onsuccess = e => {
        DB = e.target.result;
        resolve(DB);
      };

      request.onupgradeneeded = e => {
        let db = e.target.result;
        db.createObjectStore("stocks", { keyPath: "paper" });
      };
    });
  }
};
