/**
 * This file represents DB access layer.
 */
import path from "path";
import configInstance from "../constants/Config";
import { Friend } from "../models/Friend";
import { IFriendRepository } from "./IFriendRepository";

class FriendRepositoryDB implements IFriendRepository {
  getFriendsWithBirthdays(birthdate = new Date()): Friend[] {
    // eslint-disable-next-line
    const friends: Friend[] = require(path.join(
      __dirname,
      configInstance.friendsDBPath
    ));

    return friends.filter((friend) => {
      // TODO: search by 'birthdate' parameter
      return true;
    });
  }
}

export default new FriendRepositoryDB();
