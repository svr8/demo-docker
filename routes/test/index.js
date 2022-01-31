"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRouter = void 0;
var handler_1 = require("./handler");
var express_1 = require("express");
var testRouter = express_1.Router();
exports.testRouter = testRouter;
var testHandler = new handler_1.TestHandler();
// get
testRouter.get('/', testHandler.testGet);
