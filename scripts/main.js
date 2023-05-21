(function (window) {
  "use strict";

  const FORM_SELECTOR = '[data-coffee-order="form"]';
  const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  const SERVER_URL = "https://jsonplaceholder.typicode.com/posts";
  const App = window.App;
  const Truck = App.Truck;
  const DataStore = App.DataStore;
  const RemoteDataStore = App.RemoteDataStore;
  const FormHandler = App.FormHandler;
  const Validation = App.Validation;
  const CheckList = App.CheckList;
  const remoteDS = new RemoteDataStore(SERVER_URL);
  const myTruck = new Truck("ncc-1701", remoteDS);
  window.myTruck = myTruck;
  const checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  const formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });

  formHandler.addInputHandler(Validation.isCompanyEmail);
})(window);
