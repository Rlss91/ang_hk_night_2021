import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TstohtmlComponent } from './components/tstohtml/tstohtml.component';
import { Ngif1Component } from './components/ngif/ngif1/ngif1.component';
import { Ngif2Component } from './components/ngif/ngif2/ngif2.component';
import { Ngif3Component } from './components/ngif/ngif3/ngif3.component';
import { Ngfor1Component } from './components/ngfor/ngfor1/ngfor1.component';
import { Ngfor2Component } from './components/ngfor/ngfor2/ngfor2.component';
import { Ngfor3Component } from './components/ngfor/ngfor3/ngfor3.component';
import { Bind1Component } from './components/bindcomponents/bind1/bind1.component';
import { Bind2Component } from './components/bindcomponents/bind2/bind2.component';
import { Bind2waybindComponent } from './components/bindcomponents/bind2waybind/bind2waybind.component';
import { FatherComponent } from './components/fatherchild/father/father.component';
import { ChildComponent } from './components/fatherchild/child/child.component';
import { NgClassDirComponent } from './components/attributeDirectives/ng-class-dir/ng-class-dir.component';
import { NgStyleDirComponent } from './components/attributeDirectives/ng-style-dir/ng-style-dir.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TstohtmlComponent,
    Ngif1Component,
    Ngif2Component,
    Ngif3Component,
    Ngfor1Component,
    Ngfor2Component,
    Ngfor3Component,
    Bind1Component,
    Bind2Component,
    Bind2waybindComponent,
    FatherComponent,
    ChildComponent,
    NgClassDirComponent,
    NgStyleDirComponent,
    NgswitchComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
