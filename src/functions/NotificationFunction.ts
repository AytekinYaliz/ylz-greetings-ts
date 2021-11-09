/**
 * This function represents a Lambdha function that will listen for
 * 'SendEmailGreetingCommand' and 'SendSMSGreetingCommand' events.
 */
import logger from "../lib/logger";
import sendEmailGreetingCommandEmitterInstance, {
  ISendEmailGreetingCommandPayload,
} from "../events/SendEmailGreetingCommandEmitter";
import sendSMSGreetingCommandEmitterInstance, {
  ISendSMSGreetingCommandPayload,
} from "../events/SendSMSGreetingCommandEmitter";

class NotificationFunction {
  sendEmailGreeting(friend: ISendEmailGreetingCommandPayload): void {
    logger.info(`Email is sent to ${friend.first_name} at ${friend.email}.`);
  }
  sendSMSGreeting(friend: ISendSMSGreetingCommandPayload): void {
    logger.info(`SMS is sent to ${friend.first_name} at ${friend.mobile}.`);
  }

  start() {
    sendEmailGreetingCommandEmitterInstance.subscribe(this.sendEmailGreeting);
    sendSMSGreetingCommandEmitterInstance.subscribe(this.sendSMSGreeting);
  }
}

export default new NotificationFunction();
