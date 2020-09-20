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
var AccountForm_1 = require("../AccountForm");
var TestInitializer_1 = require("./TestInitializer");
describe("AccountForm", function () {
    beforeEach(function () {
        TestInitializer_1.TestInitializer.BeforeEach("account");
    });
    it("should notify the user of the account name on load", function () {
        var frmContext = XrmMock.XrmMockGenerator.getEventContext();
        XrmMock.XrmMockGenerator.Attribute.createString("name", "Exalents");
        AccountForm_1.AccountForm.onLoad(frmContext);
        expect(TestInitializer_1.TestInitializer.FormNotifications.size).toBe(1);
        expect(TestInitializer_1.TestInitializer.FormNotifications.values().next().value).toContain("Exalents");
    });
});
//# sourceMappingURL=AccountForm.test.js.map