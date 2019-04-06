import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ReposListStore} from '../../../core/singleton-stores/repos-list.store';
import {ReposService} from '../../../core/singleton-services/repos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(public store: ReposListStore) { }

  ngOnInit() {
    // this.reposService.listRepositories().subscribe(val => console.log(val));
    this.store.init();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

}
