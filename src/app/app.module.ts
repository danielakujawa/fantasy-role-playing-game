import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GnomesListComponent } from './pages/gnomes-list/gnomes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GnomesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
