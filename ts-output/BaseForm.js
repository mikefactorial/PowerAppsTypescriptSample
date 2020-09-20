"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseForm {
    static getHelloPhrase(formContext, primaryFieldName) {
        return "Hello. The name of this " + formContext.data.entity.getEntityName() + " is " + formContext.data.entity.attributes.get(primaryFieldName).getValue();
    }
}
exports.BaseForm = BaseForm;
//# sourceMappingURL=BaseForm.js.map