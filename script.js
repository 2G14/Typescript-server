"use strict";
/*
let xhr;

function send() {
  const url = "get"
  const params = "get=" + "";
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = check;
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-from-urlencoded");
  xhr.send(params);
}

function check() {
  if (xhr.readyState === 4 && xhr.status === 200)
    receive();
}

function receive() {
  const response = JSON.parse(xhr.responseText);
  alert(response);
}
*/
exports.__esModule = true;
window.addEventListener("load" /* LOAD */, function () { return alert("load"); });
window.addEventListener("click" /* CLICK */, function () { return alert("click"); });
window.addEventListener("mousemove" /* MOUSE_MOVE */, function () { return alert("mousemove"); });
var HttpRequest = /** @class */ (function () {
    function HttpRequest() {
    }
    HttpRequest.prototype.send = function (url) {
        this.xhr = new XMLHttpRequest();
        this.xhr.onreadystatechange = this.checkAndReceive;
        this.xhr.open("GET", url, true);
    };
    HttpRequest.prototype.checkAndReceive = function () {
        switch (this.xhr.readyState) {
            case XMLHttpRequest.OPENED:
                this.xhr.send();
                break;
            case XMLHttpRequest.HEADERS_RECEIVED:
                console.log(this.xhr.getAllResponseHeaders());
                break;
            case XMLHttpRequest.LOADING:
                break;
            case XMLHttpRequest.DONE:
                console.log(this.xhr.responseText);
                break;
        }
    };
    return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
