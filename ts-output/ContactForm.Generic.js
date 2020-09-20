"use strict";
function onLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    var hello = "Hello. This contact's name is " + formContext.data.entity.attributes.get("fullname").getValue();
    formContext.ui.setFormNotification(hello, "INFO", "1");
}
//# sourceMappingURL=ContactForm.Generic.js.map