import httpService from "./../utils/http.service";

/**
 * fetch Github profile
 *
 * @param {UserName} user
 * @return {Promise}
 */
function fetchGithubUser(user) {
  return httpService
    .get(`${process.env.VUE_APP_API_GITHUB_URL}/${user}`)
    .then(({ data }) => {
      return data;
    });
}

export { fetchGithubUser };
