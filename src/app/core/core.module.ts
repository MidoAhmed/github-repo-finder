import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReposListStore} from './singleton-stores/repos-list.store';
import {ReposService} from './singleton-services/repos.service';
import {AppService} from './singleton-services/app.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AppService, ReposListStore, ReposService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import Core modules in the AppModule only.'
      );
    }
  }
}
