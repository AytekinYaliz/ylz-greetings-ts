/**
 * This function represents a Lambdha function that will listen for 'GreetingsJobRunEvent' event.
 */
import { Friend } from "../models/Friend";
import greetingsJobRunEventEmitterInstance from "../events/GreetingsJobRunEventEmitter";
import sendEmailGreetingCommandEmitterInstance from "../events/SendEmailGreetingCommandEmitter";
import sendSMSGreetingCommandEmitterInstance from "../events/SendSMSGreetingCommandEmitter";
import friendRepositoryFactoryInstance from "../repositories/FriendRepositoryFactory";

class GreetingsJob {
  greetingsJobRunEventReceived(payload: { birthdate: Date }) {
    const friendRepository = friendRepositoryFactoryInstance.getRepository();
    const friends = friendRepository.getFriendsWithBirthdays(payload.birthdate);

    friends.forEach((friend: Friend) => {
      // if the friend has email, send an email. Otherwise, send an SMS.
      if (friend.email) {
        sendEmailGreetingCommandEmitterInstance.publish({
          timestamp: Date.now(),
          first_name: friend.first_name,
          email: friend.email,
        });
      } else if (friend.mobile) {
        sendSMSGreetingCommandEmitterInstance.publish({
          timestamp: Date.now(),
          first_name: friend.first_name,
          mobile: friend.mobile,
        });
      }
    });
  }

  start() {
    greetingsJobRunEventEmitterInstance.subscribe(
      this.greetingsJobRunEventReceived
    );
  }
}

export default new GreetingsJob();
