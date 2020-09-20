import {FormCommon} from "./FormCommon";

export class ContactForm {
    public static onLoad(executionContext: Xrm.Events.EventContext): void {
        let formContext: Xrm.FormContext = executionContext.getFormContext();
        let hello: string = FormCommon.getHelloPhrase(formContext, "firstname");
        formContext.ui.setFormNotification(hello, XrmEnum.FormNotificationLevel.Info, "1");
    }
}