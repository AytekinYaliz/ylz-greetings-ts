import { IFriendRepository } from "./IFriendRepository";
import configInstance from "../constants/Config";
import { FriendsDatasourceType } from "../constants/enums";
import friendRepositoryDBInstance from "./FriendRepositoryDB";
import friendRepositoryFileInstance from "./FriendRepositoryFile";

class FriendRepositoryFactory {
  getRepository(): IFriendRepository {
    if (configInstance.friendsDatasource === FriendsDatasourceType.file) {
      return friendRepositoryFileInstance;
    } else {
      return friendRepositoryDBInstance;
    }
  }
}

export default new FriendRepositoryFactory();
