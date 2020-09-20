"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormCommon_1 = require("./FormCommon");
var AccountForm = (function () {
    function AccountForm() {
    }
    AccountForm.onLoad = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var hello = FormCommon_1.FormCommon.getHelloPhrase(formContext, "name");
        formContext.ui.setFormNotification(hello, "WARNING", "1");
    };
    return AccountForm;
}());
exports.AccountForm = AccountForm;
//# sourceMappingURL=AccountForm.js.map