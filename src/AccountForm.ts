import {FormCommon} from "./FormCommon";

export class AccountForm {

    public static onLoad(executionContext: Xrm.Events.EventContext): void {
        let formContext: Xrm.FormContext = executionContext.getFormContext();
        let hello: string = FormCommon.getHelloPhrase(formContext, "name");
        formContext.ui.setFormNotification(hello, XrmEnum.FormNotificationLevel.Info, "1");
    }
}