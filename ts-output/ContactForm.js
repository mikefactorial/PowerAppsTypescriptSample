"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseForm_1 = require("./BaseForm");
class ContactForm {
    static onLoad(executionContext) {
        let formContext = executionContext.getFormContext();
        let hello = BaseForm_1.BaseForm.getHelloPhrase(formContext, "fullname");
        formContext.ui.setFormNotification(hello, "WARNING" /* Warning */, "1");
        //alert(hello);
        console.log("All Done");
    }
    static onSave(executionContext) {
        let formContext = executionContext.getFormContext();
        let hello = BaseForm_1.BaseForm.getHelloPhrase(formContext, "fullname");
        formContext.ui.setFormNotification(hello, "WARNING" /* Warning */, "1");
        //alert(hello);
        console.log("All Done");
    }
}
exports.ContactForm = ContactForm;
//# sourceMappingURL=ContactForm.js.map