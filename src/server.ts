import readline from "readline";
import { stdin, stdout } from "process";

import logger from "./lib/logger";
import greetingsJobInstance from "./jobs/GreetingsJob";
import notificationFunctionInstance from "./functions/NotificationFunction";
import greetingServiceInstance from "./services/GreetingService";

function initiate() {
  const rl = readline.createInterface(stdin, stdout);

  function start() {
    greetingsJobInstance.start();
    notificationFunctionInstance.start();
    greetingServiceInstance.start();

    return "The application has started. Please click CTRL+C to terminate...\n";
  }
  function terminate() {
    greetingsJobInstance.stop();
    rl.close();
    logger.info("The application has terminated...");
  }

  rl.question(start(), () => {
    terminate();
  });

  rl.on("SIGINT", () => {
    logger.info("SIGINT");
    terminate();
  });
}

export default initiate();
