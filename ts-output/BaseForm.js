"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseForm = void 0;
var BaseForm = (function () {
    function BaseForm() {
    }
    BaseForm.getHelloPhrase = function (formContext, primaryFieldName) {
        return "Hello. The name of this " + formContext.data.entity.getEntityName() + " is " + formContext.data.entity.attributes.get(primaryFieldName).getValue();
    };
    return BaseForm;
}());
exports.BaseForm = BaseForm;
//# sourceMappingURL=BaseForm.js.map