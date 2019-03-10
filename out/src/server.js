"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
// Server
var ServerAPI = /** @class */ (function () {
    // constructor
    function ServerAPI(model) {
        this.model = model;
    }
    // server listen port
    ServerAPI.prototype.initServer = function (port) {
        var _this = this;
        var server = http.createServer(function (request, response) { return _this.requestHandler(request, response); });
        server.listen(port);
    };
    // request handler
    ServerAPI.prototype.requestHandler = function (request, response) {
        var requestText = "";
        console.log(request.method);
        response.end(this.model.handle(requestText));
    };
    return ServerAPI;
}());
exports.ServerAPI = ServerAPI;
//# sourceMappingURL=server.js.map