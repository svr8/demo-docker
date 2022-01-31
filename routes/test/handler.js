"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestHandler = void 0;
var TestHandler = /** @class */ (function () {
    function TestHandler() {
    }
    TestHandler.prototype.testGet = function (req, res) {
        var msg = 'Hello World';
        var logMsg = "GET: " + req.socket.localPort;
        console.log(logMsg);
        res.status(200).send({ msg: msg, logMsg: logMsg });
    };
    return TestHandler;
}());
exports.TestHandler = TestHandler;
