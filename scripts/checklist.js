(function (window) {
  "use strict";

  const App = window.App || {};
  const $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error("No selector provider");
    }

    this.$element = $(selector);

    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  CheckList.prototype.addClickHandler = function (fn) {
    this.$element.on(
      "click",
      "input",
      function (event) {
        const email = event.target.value;
        this.removeRow(email);
        fn(email);
      }.bind(this)
    );
  };

  CheckList.prototype.addRow = function (coffeeOrder) {
    this.removeRow(coffeeOrder.emailAddress);

    const rowElement = new Row(coffeeOrder);

    this.$element.append(rowElement.$element);
  };

  CheckList.prototype.removeRow = function (email) {
    this.$element
      .find('[value="' + email + '"]')
      .closest('[data-coffee-order="checkbox"]')
      .remove();
  };

  function Row(coffeeOrder) {
    const $div = $("<div></div>", {
      "data-coffee-order": "checkbox",
      class: "checkbox",
    });

    const $label = $("<label></label>");

    const $checkbox = $("<input></input>", {
      type: "checkbox",
      value: coffeeOrder.emailAddress,
    });

    let description = coffeeOrder.size + " ";
    if (coffeeOrder.flavor) {
      description += coffeeOrder.flavor + " ";
    }

    description += coffeeOrder.coffee + ", ";
    description += " (" + coffeeOrder.emailAddress + ")";
    description += " [" + coffeeOrder.strength + "x]";

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  App.CheckList = CheckList;
  window.App = App;
})(window);
