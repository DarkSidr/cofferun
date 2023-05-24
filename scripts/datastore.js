(function (window) {
  "use strict";

  const App = window.App || {};
  const Promise = window.Promise;

  function DataStore() {
    this.data = {};
  }

  function promiseResolvedWith(value) {
    const promise = new Promise(function (resolve, reject) {
      resolve(value);
    });
    return promise;
  }

  DataStore.prototype.add = function (key, val) {
    return promiseResolvedWith(null);
  };

  DataStore.prototype.get = function (key) {
    return promiseResolvedWith(this.data[key]);
  };

  DataStore.prototype.getAll = function () {
    return promiseResolvedWith(this.data);
  };

  DataStore.prototype.remove = function (key) {
    delete this.data[key];
    return promiseResolvedWith(null);
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
