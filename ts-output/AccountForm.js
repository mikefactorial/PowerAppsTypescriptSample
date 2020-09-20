"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountForm = void 0;
var BaseForm_1 = require("./BaseForm");
var AccountForm = (function () {
    function AccountForm() {
    }
    AccountForm.onLoad = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var hello = BaseForm_1.BaseForm.getHelloPhrase(formContext, "name");
        formContext.ui.setFormNotification(hello, "WARNING", "1");
    };
    return AccountForm;
}());
exports.AccountForm = AccountForm;
//# sourceMappingURL=AccountForm.js.map