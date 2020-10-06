sap.ui.define([
  "sap/dev/tutorial/products/controller/BaseController",
  "sap/m/MessageToast"
], function(Controller, MessageToast) {
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
        parameters: {
          expand: "Supplier,Category"
        },
        events: {
          dataRequested: function(){
            view.setBusy(true);
          },
          dataReceived: function(){
            view.setBusy(false);
          }
        }  
      })
    },

    addToCart: function(oControlEvent){
      MessageToast.show("Added to Cart");
    },

    markAsFav: function(oControlEvent){
      const button = oControlEvent.getSource();
      if(button.getIcon() === "sap-icon://unfavorite"){
        button.setIcon("sap-icon://favorite");
        MessageToast.show("Added to Favourites");
        return;
      }

      button.setIcon("sap-icon://unfavorite");
      MessageToast.show("Removed from Favourites");
    },

    trimSuperfluousBytes: function(sVal){
      if (typeof sVal === "string") {
        const sTrimmed = sVal.substr(104);
        return "data:image/bmp;base64," + sTrimmed;
      }
      return sVal;
    }

  });
});
