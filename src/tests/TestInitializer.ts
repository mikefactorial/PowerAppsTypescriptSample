import * as Sinon from "sinon";
import * as XrmMock from "xrm-mock";


export class TestInitializer
{
    static FormNotifications : Map<string, string> = new Map<string, string>();

    static BeforeEach(entityName: string) : void {
        XrmMock.XrmMockGenerator.initialise({
            entity: {
                entityName: entityName,
            },
        });

        Sinon.stub(XrmMock.UiMock.prototype, "setFormNotification").callsFake(
            function setFormNotificationFake(message: string, uniqueId: string): boolean {
                TestInitializer.FormNotifications.set(uniqueId, message);
                return true;
            }
        );
    }
}