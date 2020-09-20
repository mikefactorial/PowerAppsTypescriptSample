
export class FormCommon {

    public static getHelloPhrase(formContext: Xrm.FormContext, primaryFieldName: string): string {
        return "Hello. The name of this " + formContext.data.entity.getEntityName() + " is " + formContext.data.entity.attributes.get(primaryFieldName).getValue() + ". Cool right?";
    }
}