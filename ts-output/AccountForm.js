"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormCommon_1 = require("./FormCommon");
var AccountForm = (function () {
    function AccountForm() {
    }
    AccountForm.onLoad = function (executionContext) {
        FormCommon_1.FormCommon.onLoad(executionContext, "name");
    };
    return AccountForm;
}());
exports.AccountForm = AccountForm;
//# sourceMappingURL=AccountForm.js.map