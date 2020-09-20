
export class AccountForm {

    public static onLoad(executionContext: Xrm.Events.EventContext): any {
        let formContext: Xrm.FormContext = executionContext.getFormContext();
        let hello: string = AccountForm.getHelloPhrase(formContext);
        formContext.ui.setFormNotification(hello, XrmEnum.FormNotificationLevel.Warning, "1");
        //alert(hello);
        console.log("All Done");
    }

    public static onSave(executionContext: Xrm.Events.EventContext): any {
        let formContext: Xrm.FormContext = executionContext.getFormContext();
        let hello: string = AccountForm.getHelloPhrase(formContext);
        formContext.ui.setFormNotification(hello, XrmEnum.FormNotificationLevel.Warning, "1");
        //alert(hello);
        console.log("All Done");
    }

    private static getHelloPhrase(formContext: Xrm.FormContext): string {
        return "Hello. This contact's first name is " + formContext.data.entity.attributes.get("firstname").getValue();
    }
}