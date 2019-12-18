import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccesosComponent } from './components/accesos/accesos.component';
import { PeoComponent } from './components/peo/peo.component';
import { AdminpersonasComponent } from './components/accesos/adminpersonas/adminpersonas.component';

@NgModule({
  declarations: [
    AppComponent,
    AccesosComponent,
    PeoComponent,
    AdminpersonasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
