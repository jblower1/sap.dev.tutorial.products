sap.ui.define([
  "sap/dev/tutorial/products/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("sap.dev.tutorial.products.controller.Products", {

    handleListItemPress: function(oEvent) {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
      oRouter.navTo("ProductDetail", {
        productID: selectedProductId
      });
    }
  });
});
