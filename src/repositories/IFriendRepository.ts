import { Friend } from "../models/Friend";

interface IFriendRepository {
  /**
   * Returns friends who has a birthdate for the given date.
   * @param birthdate Date
   */
  getFriendsWithBirthdays(birthdate: Date): Friend[];
}

export { IFriendRepository };
