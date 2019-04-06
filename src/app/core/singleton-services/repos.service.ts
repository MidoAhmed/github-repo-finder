import {Injectable} from '@angular/core';
import {AppService} from './app.service';
import {REPOS_LIST_CONFIG} from '../repos-list.endpoint';
import {throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ReposService {
  constructor(private appService: AppService, private http: HttpClient) {
  }

  listRepositories(parmas?) {
    const request = REPOS_LIST_CONFIG.requests.listRepositories;
    /*const options = {
      params: {
        ...sortHelpers.convertSortToRequestParams(sort),
      },
    };*/

    return this.appService.get(request.url, parmas);
  }

}
