import {Injectable, OnDestroy} from '@angular/core';
import {Store} from 'rxjs-observable-store';
import {ReposListStoreState} from './repos-list.store.state';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ReposService} from '../singleton-services/repos.service';

@Injectable()
export class ReposListStore extends Store<ReposListStoreState> implements OnDestroy {

  repos_list$: Observable<any>;

  constructor(private  reposService: ReposService) {
    super(new ReposListStoreState());
    this.repos_list$ = this.state$.pipe(map(state => state.repos_list));
  }

  init() {
    this.reposService.listRepositories().pipe(
      tap((repos_list: any) => {
        this.handleGetUserResponse(repos_list);
      })
    ).subscribe();
  }

  get repotList(): any {
    return this.state.repos_list;
  }


  private handleGetUserResponse(repos_list: any): void {
    this.setState({
      ...this.state,
      repos_list: repos_list,
    });
  }

  ngOnDestroy(): void {
  }
}
