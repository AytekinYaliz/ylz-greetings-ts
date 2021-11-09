import { EventName } from "../constants/enums";
import { EventEmitterWrapper } from "./EventEmitterWrapper";
import { IEventPayload } from "./IEventPayload";

interface IGreetingsJobRunEventPayload extends IEventPayload {
  birthdate: Date;
}

class GreetingsJobRunEventEmitter extends EventEmitterWrapper {
  constructor() {
    super();
    this.eventName = EventName.GreetingsJobRunEvent;
  }
  publish(payload: IGreetingsJobRunEventPayload) {
    super.publish(payload);
  }
  subscribe(callback: (payload: IGreetingsJobRunEventPayload) => void) {
    super.subscribe(callback);
  }
}

export { IGreetingsJobRunEventPayload };
export default new GreetingsJobRunEventEmitter();
