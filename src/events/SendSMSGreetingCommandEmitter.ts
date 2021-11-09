import { EventName } from "../constants/enums";
import { EventEmitterWrapper } from "./EventEmitterWrapper";
import { IEventPayload } from "./IEventPayload";

interface ISendSMSGreetingCommandPayload extends IEventPayload {
  first_name: string;
  mobile: string;
}

class SendSMSGreetingCommandEmitter extends EventEmitterWrapper {
  constructor() {
    super();
    this.eventName = EventName.SendEmailGreetingCommand;
  }
  publish(payload: ISendSMSGreetingCommandPayload) {
    super.publish(payload);
  }
  subscribe(callback: (payload: ISendSMSGreetingCommandPayload) => void) {
    super.subscribe(callback);
  }
}

export { ISendSMSGreetingCommandPayload };
export default new SendSMSGreetingCommandEmitter();
