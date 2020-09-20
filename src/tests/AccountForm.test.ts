import * as XrmMock from "xrm-mock";
import {AccountForm} from "../AccountForm";
import {TestInitializer} from "./TestInitializer";

describe("AccountForm", () => {
    beforeEach(() => {
        TestInitializer.BeforeEach("account");
    });

    it("should notify the user of the account name on load", () => {
        let frmContext = XrmMock.XrmMockGenerator.getEventContext();
        XrmMock.XrmMockGenerator.Attribute.createString("name", "Exalents")
        AccountForm.onLoad(frmContext);
        expect(TestInitializer.FormNotifications.size).toBe(1);
        expect(TestInitializer.FormNotifications.values().next().value).toContain("Exalents");
    });
});