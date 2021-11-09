import path from "path";
import configInstance from "../constants/Config";
import { Friend } from "../models/Friend";
import { IFriendRepository } from "./IFriendRepository";

class FriendRepositoryFile implements IFriendRepository {
  getFriendsWithBirthdays(birthdate = new Date()): Friend[] {
    // eslint-disable-next-line
    const friends: Friend[] = require(path.join(
      __dirname,
      configInstance.friendsFilePath
    ));

    return friends.filter((friend) => {
      // TODO: filter by 'birthdate' parameter
      return true;
    });
  }
}

export default new FriendRepositoryFile();
