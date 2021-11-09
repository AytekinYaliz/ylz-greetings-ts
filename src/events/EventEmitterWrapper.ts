import EventEmitter from "events";
import { EventName } from "../constants/enums";
import { IEventPayload } from "./IEventPayload";

abstract class EventEmitterWrapper extends EventEmitter {
  protected eventName: EventName;

  protected publish(payload: IEventPayload) {
    this.emit(this.eventName, payload);
  }
  protected subscribe(callback: (payload: IEventPayload) => void) {
    this.on(this.eventName, (payload: IEventPayload) => {
      callback(payload);
    });
  }
}

export { EventEmitterWrapper };
