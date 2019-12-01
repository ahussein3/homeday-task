import { get } from "lodash-es";

export class UserProfileModel {
  constructor(user) {
    this.avatar_url = get(user, "avatar_url", "");
    this.name = get(user, "name", "");
    this.followers = get(user, "followers", 0);
    this.following = get(user, "following", 0);
    this.userName = get(user, "login", "");
    this.location = get(user, "location", "");
  }
}
export default {
  UserProfileModel
};
