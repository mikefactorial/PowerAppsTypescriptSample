"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormCommon = (function () {
    function FormCommon() {
    }
    FormCommon.onLoad = function (executionContext, primaryFieldName) {
        var formContext = executionContext.getFormContext();
        var hello = "Hello. This " + formContext.data.entity.getEntityName() + "'s name is " + formContext.data.entity.attributes.get(primaryFieldName).getValue();
        formContext.ui.setFormNotification(hello, "INFO", "1");
    };
    return FormCommon;
}());
exports.FormCommon = FormCommon;
//# sourceMappingURL=FormCommon.js.map