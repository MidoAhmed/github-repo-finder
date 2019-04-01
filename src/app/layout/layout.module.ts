import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent]
})
export class LayoutModule {
  constructor(@Optional() @SkipSelf() parentModule: LayoutModule) {
    if (parentModule) {
      throw new Error(
        'LayoutModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
