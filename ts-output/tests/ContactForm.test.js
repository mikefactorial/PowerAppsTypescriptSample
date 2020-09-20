"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
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