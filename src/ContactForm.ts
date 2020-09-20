import {FormCommon} from "./FormCommon";

export class ContactForm {
    public static onLoad(executionContext: Xrm.Events.EventContext): void {
        FormCommon.onLoad(executionContext, "firstname");
    }
}