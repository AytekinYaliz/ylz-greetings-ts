enum FriendsDatasourceType {
  file = "file",
  db = "db",
}

enum EventName {
  GreetingsJobRunEvent = "GreetingsJobRunEvent",
  SendEmailGreetingCommand = "SendEmailGreetingCommand",
  SendSMSGreetingCommand = "SendSMSGreetingCommand",
}

export { FriendsDatasourceType, EventName };
