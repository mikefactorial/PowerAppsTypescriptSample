export class ContactFormGeneric {

    public static onLoad(executionContext: Xrm.Events.EventContext): any {
        let formContext: Xrm.FormContext = executionContext.getFormContext();
        let hello: string = ContactFormGeneric.getHelloPhrase(formContext);
        formContext.ui.setFormNotification(hello, XrmEnum.FormNotificationLevel.Info, "1");
    }

    private static getHelloPhrase(formContext: Xrm.FormContext): string {
        return "Hello. This contact's name is " + formContext.data.entity.attributes.get("fullname").getValue();
    }
}