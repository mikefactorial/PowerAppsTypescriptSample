import assert = require('assert');
import XrmMock = require('xrm-mock');
import AccountForm = require('../AccountForm');

export function Test1() {
    let notificationText: string = "";
    XrmMock.XrmMockGenerator.initialise();
    XrmMock.XrmMockGenerator.Attribute.createString("firstname", "jerry");

    let contextMock = XrmMock.XrmMockGenerator.getEventContext();
    AccountForm.AccountForm.onLoad(contextMock);
    assert.ok(true, "This shouldn't fail");
};

export function Test2() {
    assert.ok(1 === 1, "This shouldn't fail");
    assert.ok(false, "This should fail");
};
