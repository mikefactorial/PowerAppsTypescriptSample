"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountForm {
    static onLoad(executionContext) {
        let formContext = executionContext.getFormContext();
        let hello = AccountForm.getHelloPhrase(formContext);
        formContext.ui.setFormNotification(hello, "WARNING" /* Warning */, "1");
        //alert(hello);
        console.log("All Done");
    }
    static onSave(executionContext) {
        let formContext = executionContext.getFormContext();
        let hello = AccountForm.getHelloPhrase(formContext);
        formContext.ui.setFormNotification(hello, "WARNING" /* Warning */, "1");
        //alert(hello);
        console.log("All Done");
    }
    static getHelloPhrase(formContext) {
        return "Hello. This account name is " + formContext.data.entity.attributes.get("name").getValue();
    }
}
exports.AccountForm = AccountForm;
//# sourceMappingURL=AccountForm.js.map