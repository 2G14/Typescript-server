import * as http from "http";
import { Model } from "./model";

// Server
export class ServerAPI {
  // Model
  private model: Model;
  // constructor
  constructor(model: Model) {
    this.model = model;
  }
  // server listen port
  public initServer(port: string): void {
    const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => this.requestHandler(request, response));
    server.listen(port);
  }
  // request handler
  private requestHandler(request: http.IncomingMessage, response: http.ServerResponse): void {
    const requestText = "";
    console.log(request.method);
    response.end(this.model.handle(requestText));
  }
}
