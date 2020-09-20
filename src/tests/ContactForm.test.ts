import * as XrmMock from "xrm-mock";
import {ContactForm} from "../ContactForm";
import {TestInitializer} from "./TestInitializer";

describe("ContactForm", () => {
    beforeEach(() => {
        TestInitializer.BeforeEach("contact");
    });

    it("should notify the user of the contact first name on load", () => {
        let frmContext = XrmMock.XrmMockGenerator.getEventContext();
        frmContext.formContext.data.entity
        XrmMock.XrmMockGenerator.Attribute.createString("fullname", "Mike Ochs")
        ContactForm.onLoad(frmContext);
        expect(TestInitializer.FormNotifications.size).toBe(1);
        expect(TestInitializer.FormNotifications.values().next().value).toContain("Mike Ochs");
    });
});