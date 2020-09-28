sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("sap.dev.tutorial.products.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "sap.dev.tutorial.products",
          async: true,
          manifest: true
        }
      });
    }

  });
});
