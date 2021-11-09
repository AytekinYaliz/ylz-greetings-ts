import dotenv from "dotenv";

dotenv.config();

interface IConfig {
  friendsDatasource: string;
  friendsDBPath: string;
  friendsFilePath: string;
  greetingsJobSchedule: string;
}

class Config implements IConfig {
  public friendsDatasource: string;
  public friendsDBPath: string;
  public friendsFilePath: string;
  public greetingsJobSchedule: string;

  constructor() {
    this.friendsDatasource = process.env.FRIENDS_DATASOURCE;
    this.friendsDBPath = process.env.FRIENDS_DB_PATH;
    this.friendsFilePath = process.env.FRIENDS_FILE_PATH;
    this.greetingsJobSchedule = process.env.GREETINGS_JOB_SCHEDULE;
  }
}

export default new Config();
