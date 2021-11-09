/**
 * This job represents a scheduled job that will run every morning around 1 AM.
 * It publishes 'GreetingsJobRunEvent' event when it runs.
 */
import { ScheduledTask, schedule } from "node-cron";
import configInstance from "../constants/Config";
import greetingsJobRunEventEmitterInstance from "../events/GreetingsJobRunEventEmitter";

class GreetingsJob {
  private task: ScheduledTask;

  constructor() {
    this.task = schedule(
      configInstance.greetingsJobSchedule,
      () => {
        greetingsJobRunEventEmitterInstance.publish({
          timestamp: Date.now(),
          birthdate: new Date(),
        });
      },
      {
        scheduled: false,
      }
    );
  }
  start() {
    this.task.start();
  }
  stop() {
    this.task.stop();
  }
}

export default new GreetingsJob();
