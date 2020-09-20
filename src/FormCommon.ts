
export class FormCommon {

    public static getHelloPhrase(formContext: Xrm.FormContext, primaryFieldName: string): string {
        return "Hello. This " + formContext.data.entity.getEntityName() + "'s name is " + formContext.data.entity.attributes.get(primaryFieldName).getValue() + ". Cool right?";
    }
}