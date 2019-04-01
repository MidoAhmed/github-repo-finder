import {NgModule, Optional, SkipSelf} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './layout/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: './features/list/list.module#ListModule',
      }
    ]
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
