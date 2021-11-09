import greetingsJobRunEventEmitterInstance from "../../src/events/GreetingsJobRunEventEmitter";
import sendEmailGreetingCommandEmitterInstance from "../../src/events/SendEmailGreetingCommandEmitter";

describe("EventEmitter class", () => {
  // beforeEach(() => {
  //   mocked(fetch).mockClear();
  // });

  it("it should subscribe correctly", () => {
    const payload = { timestamp: Date.now(), birthdate: new Date() };

    greetingsJobRunEventEmitterInstance.subscribe((expectedPayload) => {
      expect(expectedPayload).toEqual(payload);
    });

    greetingsJobRunEventEmitterInstance.publish(payload);
  });

  it("it should subscribe and get notified twice", () => {
    const payload = {
      timestamp: Date.now(),
      first_name: "test",
      email: "test@test.com",
    };
    const sendEmailGreetingCommandgreetingsJobRunEventHandler = jest.fn();

    sendEmailGreetingCommandEmitterInstance.subscribe(
      sendEmailGreetingCommandgreetingsJobRunEventHandler
    );

    sendEmailGreetingCommandEmitterInstance.publish(payload);
    sendEmailGreetingCommandEmitterInstance.publish(payload);

    expect(sendEmailGreetingCommandgreetingsJobRunEventHandler).toBeCalledTimes(
      2
    );
  });
});
