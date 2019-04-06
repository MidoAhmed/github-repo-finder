import {APP_CONFIG} from '../app.config';

export const REPOS_LIST_CONFIG = {
  requests: {
    listRepositories: {
      name: 'listRepositories',
      url: `${APP_CONFIG.apiBaseUrl}/repositories`,
    },
    addVote: {
      name: 'addVote',
      url: `${APP_CONFIG.apiBaseUrl}/candidates/:id/vote`,
    },
    removeVote: {
      name: 'removeVote',
      url: `${APP_CONFIG.apiBaseUrl}/candidates/:id/vote`,
    }
  }
};
