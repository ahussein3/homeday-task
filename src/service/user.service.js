import httpService from "./../utils/http.service";
import { UserProfileModel } from "./user.model";

/**
 * fetch Github profile
 *
 * @param {UserName} user
 * @return {Promise}
 */
function fetchGithubUser(user, config) {
  return httpService
    .get(`${process.env.VUE_APP_API_GITHUB_URL}/${user}`, {
      ...config
    })
    .then(({ data }) => {
      return new UserProfileModel(data);
    });
}

export { fetchGithubUser };
