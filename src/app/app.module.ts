import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {LayoutModule} from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    // Angular modules
    BrowserModule,
    HttpClientModule,

    // Core "singleton" modules (not feature modules)
    CoreModule,
    LayoutModule,

    // Feature modules

    // App routing - should be the last import!
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
