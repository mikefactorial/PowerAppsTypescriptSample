"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormCommon_1 = require("./FormCommon");
var ContactForm = (function () {
    function ContactForm() {
    }
    ContactForm.onLoad = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var hello = FormCommon_1.FormCommon.getHelloPhrase(formContext, "firstname");
        formContext.ui.setFormNotification(hello, "INFO", "1");
    };
    return ContactForm;
}());
exports.ContactForm = ContactForm;
//# sourceMappingURL=ContactForm.js.map