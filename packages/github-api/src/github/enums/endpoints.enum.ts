export enum Endpoints {
  GET_BRANCHES = 'GET /repos/{owner}/{repo}/branches',
  GET_COMMITS_BY_BRANCH = 'GET /repos/{owner}/{repo}/commits?sha={branch}',
  GET_COMMITS_DETAILS = 'GET /repos/{owner}/{repo}/commits/{commit}',
}
