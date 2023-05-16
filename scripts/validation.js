(function (window) {
  "use strict";

  const App = window.App || {};

  const Validation = {
    isCompanyEmail: function (email) {
      return /.+@test\.com$/.test(email);
    },
  };

  App.Validation = Validation;
  window.App = App;
})(window);
