(function (window) {
  "use strict";
  const App = window.App || {};
  const $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function (key, val) {
    return $.post(this.serverUrl, val, function (serverResonse) {
      console.log(serverResonse);
    });
  };

  RemoteDataStore.prototype.getAll = function (cb) {
    return $.get(this.serverUrl, function (serverResonse) {
      if (cb) {
        console.log(serverResonse);
        cb(serverResonse);
      }
    });
  };

  RemoteDataStore.prototype.get = function (key, cb) {
    return $.get(this.serverUrl + "/" + key, function (serverResonse) {
      if (cb) {
        console.log(serverResonse);
        cb(serverResonse);
      }
    });
  };

  RemoteDataStore.prototype.remove = function (key) {
    return $.ajax(this.serverUrl + "/" + key, {
      type: "DELETE",
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
