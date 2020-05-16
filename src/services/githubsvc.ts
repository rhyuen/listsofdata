import axios from "axios";

export const getGitHubUpdates = async () => {
  const githubURL = "https://api.github.com/repos/rhyuen/listsofdata/events";
  return axios.get(githubURL);
};
