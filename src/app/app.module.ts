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
import { AnimallistComponent } from './components/targil1/animallist/animallist.component';
import { AnimalitemComponent } from './components/targil1/animalitem/animalitem.component';
import { BtnBootstrapComponent } from './components/utils/btn-bootstrap/btn-bootstrap.component';
import { PipesexampleComponent } from './components/pipesexample/pipesexample.component';
import { CustomdirectiveDirective } from './directives/customdirective.directive';
import { CustomdirectivecomponentComponent } from './components/customdirectivecomponent/customdirectivecomponent.component';
import { CustomedirectiverendererDirective } from './directives/customedirectiverenderer.directive';
import { CustomedirectivebindDirective } from './directives/customedirectivebind.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import { UserLoggedInComponent } from './components/services/user-logged-in/user-logged-in.component';
import { IsUserLoggedInComponent } from './components/services/is-user-logged-in/is-user-logged-in.component';
import { ServerStatusComponent } from './components/services/obs/server-status/server-status.component';
import { ServerChangeStatusComponent } from './components/services/obs/server-change-status/server-change-status.component';

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
    AnimallistComponent,
    AnimalitemComponent,
    BtnBootstrapComponent,
    PipesexampleComponent,
    CustomdirectiveDirective,
    CustomdirectivecomponentComponent,
    CustomedirectiverendererDirective,
    CustomedirectivebindDirective,
    IfnotDirective,
    UserLoggedInComponent,
    IsUserLoggedInComponent,
    ServerStatusComponent,
    ServerChangeStatusComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
