import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//  Modules
import { CoreModule } from '@core/core.module';

//  App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
