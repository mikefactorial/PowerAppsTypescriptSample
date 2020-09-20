import {FormCommon} from "./FormCommon";

export class AccountForm {
    public static onLoad(executionContext: Xrm.Events.EventContext): void {
        FormCommon.onLoad(executionContext, "name");
    }
}