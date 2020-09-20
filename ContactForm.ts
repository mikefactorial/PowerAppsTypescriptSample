import {BaseForm} from "./BaseForm";


export class ContactForm {

    public static onLoad(executionContext: Xrm.Events.EventContext): any {
        let formContext: Xrm.FormContext = executionContext.getFormContext();
        let hello: string = BaseForm.getHelloPhrase(formContext, "fullname");
        formContext.ui.setFormNotification(hello, XrmEnum.FormNotificationLevel.Warning, "1");
        //alert(hello);
        console.log("All Done");
    }

    public static onSave(executionContext: Xrm.Events.EventContext): any {
        let formContext: Xrm.FormContext = executionContext.getFormContext();
        let hello: string = BaseForm.getHelloPhrase(formContext, "fullname");
        formContext.ui.setFormNotification(hello, XrmEnum.FormNotificationLevel.Warning, "1");
        //alert(hello);
        console.log("All Done");
    }
}