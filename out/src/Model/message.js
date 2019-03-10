"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Message implements Model
var Message = /** @class */ (function () {
    // constructor
    function Message(message) {
        this.message = message;
    }
    // handle
    Message.prototype.handle = function (requestText) {
        return this.message;
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map