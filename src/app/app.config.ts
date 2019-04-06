// app.config.ts is used to store global app’s configs like REST API base URL or some defaults.
import {environment} from '../environments/environment';

export const APP_CONFIG = {
  apiBaseUrl: environment.apiBaseUrl
};
