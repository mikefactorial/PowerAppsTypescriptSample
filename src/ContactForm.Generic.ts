function onLoad(executionContext: Xrm.Events.EventContext): any {
    let formContext: Xrm.FormContext = executionContext.getFormContext();
    let hello: string = "Hello. This contact's name is " + formContext.data.entity.attributes.get("firstname").getValue();
    formContext.ui.setFormNotification(hello, XrmEnum.FormNotificationLevel.Info, "1");
}