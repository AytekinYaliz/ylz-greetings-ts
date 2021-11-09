import { EventName } from "../constants/enums";
import { EventEmitterWrapper } from "./EventEmitterWrapper";
import { IEventPayload } from "./IEventPayload";

interface ISendEmailGreetingCommandPayload extends IEventPayload {
  first_name: string;
  email: string;
}

class SendEmailGreetingCommandEmitter extends EventEmitterWrapper {
  constructor() {
    super();
    this.eventName = EventName.SendEmailGreetingCommand;
  }
  publish(payload: ISendEmailGreetingCommandPayload) {
    super.publish(payload);
  }
  subscribe(callback: (payload: ISendEmailGreetingCommandPayload) => void) {
    super.subscribe(callback);
  }
}

export { ISendEmailGreetingCommandPayload };
export default new SendEmailGreetingCommandEmitter();
