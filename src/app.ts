import { ServerAPI } from "./server";
import { Model } from "./model";
import { Message } from "./Model/message";

// Model
const model: Model = new Message("Hello");
// Server
const server = new ServerAPI(model);
// server listen 3000
server.initServer("3000");
