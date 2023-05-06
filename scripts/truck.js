(function (window) {
  "use strict";

  const App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function (order) {
    this.db.add(order.emailAddress, order);
  };

  Truck.prototype.deliverOrder = function (customId) {
    this.db.remove(customId);
  };

  Truck.prototype.printOrders = function () {
    const customerIdArray = Object.keys(this.db.getAll());
    console.log("Truck #" + this.truckId + " has pending orders: ");
    customerIdArray.forEach(
      function (id) {
        console.log(this.db.get(id));
      }.bind(this)
    );
  };

  App.Truck = Truck;
  window.App = App;
})(window);
