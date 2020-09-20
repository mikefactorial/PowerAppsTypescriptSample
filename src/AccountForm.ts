import {BaseForm} from "./BaseForm";

export class AccountForm {

    public static onLoad(executionContext: Xrm.Events.EventContext): any {
        let formContext: Xrm.FormContext = executionContext.getFormContext();
        let hello: string = BaseForm.getHelloPhrase(formContext, "name");
        formContext.ui.setFormNotification(hello, XrmEnum.FormNotificationLevel.Warning, "1");
    }
}