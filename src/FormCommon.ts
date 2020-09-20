
export class FormCommon {

    public static onLoad(executionContext: Xrm.Events.EventContext, primaryFieldName: string): void {
        let formContext: Xrm.FormContext = executionContext.getFormContext();
        let hello: string = "Hello. This " + formContext.data.entity.getEntityName() + "'s name is " + formContext.data.entity.attributes.get(primaryFieldName).getValue();
        formContext.ui.setFormNotification(hello, XrmEnum.FormNotificationLevel.Info, "1");
    }
}