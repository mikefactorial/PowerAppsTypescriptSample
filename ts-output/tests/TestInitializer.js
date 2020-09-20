"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sinon = __importStar(require("sinon"));
var XrmMock = __importStar(require("xrm-mock"));
var TestInitializer = (function () {
    function TestInitializer() {
    }
    TestInitializer.BeforeEach = function (entityName) {
        XrmMock.XrmMockGenerator.initialise({
            entity: {
                entityName: entityName,
            },
        });
        Sinon.stub(XrmMock.UiMock.prototype, "setFormNotification").callsFake(function setFormNotificationFake(message, uniqueId) {
            TestInitializer.FormNotifications.set(uniqueId, message);
            return true;
        });
    };
    TestInitializer.FormNotifications = new Map();
    return TestInitializer;
}());
exports.TestInitializer = TestInitializer;
//# sourceMappingURL=TestInitializer.js.map