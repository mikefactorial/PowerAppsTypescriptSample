"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormCommon_1 = require("./FormCommon");
var ContactForm = (function () {
    function ContactForm() {
    }
    ContactForm.onLoad = function (executionContext) {
        FormCommon_1.FormCommon.onLoad(executionContext, "firstname");
    };
    return ContactForm;
}());
exports.ContactForm = ContactForm;
//# sourceMappingURL=ContactForm.js.map