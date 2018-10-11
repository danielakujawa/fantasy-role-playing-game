import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GnomesListComponent } from './pages/gnomes-list/gnomes-list.component';
import { DataListService } from './services/data-list.service';

const routes: Routes = [
  { path: '', component: GnomesListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GnomesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [DataListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
