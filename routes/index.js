"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
var test_1 = require("./test");
var router = express.Router();
exports.router = router;
router.use('/', test_1.testRouter);
