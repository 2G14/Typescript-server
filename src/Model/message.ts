import { Model } from "./../model";

// Message implements Model
export class Message implements Model {
  // message
  private message: string;
  // constructor
  constructor(message: string) {
    this.message = message;
  }
  // handle
  public handle(requestText: string): string {
    return this.message;
  }
}
