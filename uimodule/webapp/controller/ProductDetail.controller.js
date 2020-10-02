sap.ui.define([
  "sap/dev/tutorial/products/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("sap.dev.tutorial.products.controller.ProductDetail", {
    onInit: function(){
      const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.getRoute("ProductDetail").attachMatched(this._onRouteMatched.bind(this));
    },

    _onRouteMatched: function(oEvent){
      //when pattern is matched, need to bind data to the view
      var view = this.getView();
      var selectedProductId = oEvent.getParameter("arguments").productID;
      view.bindElement({
        path: "/Products(ProductID=" + selectedProductId + ")",
        events: {
          dataRequested: function(){
            view.setBusy(true);
          },
          dataReceived: function(){
            view.setBusy(false);
          }
        }  
      })
    }

  });
});
