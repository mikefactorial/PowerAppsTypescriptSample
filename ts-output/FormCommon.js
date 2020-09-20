"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormCommon = (function () {
    function FormCommon() {
    }
    FormCommon.getHelloPhrase = function (formContext, primaryFieldName) {
        return "Hello. The name of this " + formContext.data.entity.getEntityName() + " is " + formContext.data.entity.attributes.get(primaryFieldName).getValue() + ". Cool right?";
    };
    return FormCommon;
}());
exports.FormCommon = FormCommon;
//# sourceMappingURL=FormCommon.js.map