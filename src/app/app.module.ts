import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TstohtmlComponent } from './components/tstohtml/tstohtml.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, TstohtmlComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
