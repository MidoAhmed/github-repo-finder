import {NgModule, Optional, SkipSelf} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: './views/views.module#ViewsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(@Optional() @SkipSelf()parentModule: AppRoutingModule) {
    if (parentModule) {
      throw new Error(
        'AppRoutingModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
