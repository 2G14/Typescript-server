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

const enum EventName {
  LOAD = "load",
  CLICK = "click",
  MOUSE_MOVE = "mousemove"
}

window.addEventListener(EventName.LOAD, () => alert("load"));
window.addEventListener(EventName.CLICK, () => alert("click"));
window.addEventListener(EventName.MOUSE_MOVE, () => alert("mousemove"));

export class HttpRequest {
  private xhr: XMLHttpRequest;
  public send(url: string) {
    this.xhr = new XMLHttpRequest();
    this.xhr.onreadystatechange = this.checkAndReceive;
    this.xhr.open("GET", url, true);
  }
  private checkAndReceive() {
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
  }
}

