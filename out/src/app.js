"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var message_1 = require("./Model/message");
// Model
var model = new message_1.Message("Hello");
// Server
var server = new server_1.ServerAPI(model);
// server listen 3000
server.initServer("3000");
//# sourceMappingURL=app.js.map