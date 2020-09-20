"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = __importStar(require("xrm-mock"));
var ContactForm_1 = require("../ContactForm");
var TestInitializer_1 = require("./TestInitializer");
describe("ContactForm", function () {
    beforeEach(function () {
        TestInitializer_1.TestInitializer.BeforeEach("contact");
    });
    it("should notify the user of the contact first name on load", function () {
        var frmContext = XrmMock.XrmMockGenerator.getEventContext();
        frmContext.formContext.data.entity;
        XrmMock.XrmMockGenerator.Attribute.createString("fullname", "Mike Ochs");
        ContactForm_1.ContactForm.onLoad(frmContext);
        expect(TestInitializer_1.TestInitializer.FormNotifications.size).toBe(1);
        expect(TestInitializer_1.TestInitializer.FormNotifications.values().next().value).toContain("Mike Ochs");
    });
});
//# sourceMappingURL=ContactForm.test.js.map