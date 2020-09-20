"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactForm = void 0;
var BaseForm_1 = require("./BaseForm");
var ContactForm = (function () {
    function ContactForm() {
    }
    ContactForm.onLoad = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var hello = BaseForm_1.BaseForm.getHelloPhrase(formContext, "fullname");
        formContext.ui.setFormNotification(hello, "WARNING", "1");
        console.log("All Done");
    };
    ContactForm.onSave = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var hello = BaseForm_1.BaseForm.getHelloPhrase(formContext, "fullname");
        formContext.ui.setFormNotification(hello, "WARNING", "1");
        console.log("All Done");
    };
    return ContactForm;
}());
exports.ContactForm = ContactForm;
//# sourceMappingURL=ContactForm.js.map