"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactFormGeneric = (function () {
    function ContactFormGeneric() {
    }
    ContactFormGeneric.onLoad = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var hello = ContactFormGeneric.getHelloPhrase(formContext);
        formContext.ui.setFormNotification(hello, "INFO", "1");
    };
    ContactFormGeneric.getHelloPhrase = function (formContext) {
        return "Hello. This contact's name is " + formContext.data.entity.attributes.get("fullname").getValue();
    };
    return ContactFormGeneric;
}());
exports.ContactFormGeneric = ContactFormGeneric;
//# sourceMappingURL=ContactForm.Generic.js.map