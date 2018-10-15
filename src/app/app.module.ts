import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { GnomesListComponent } from './pages/gnomes-list/gnomes-list.component';
import { DataListService } from './services/data-list.service';
import { GnomeCardComponent } from './components/gnome-card/gnome-card.component';
import { GnomeProfileComponent } from './pages/gnome-profile/gnome-profile.component';

const routes: Routes = [
  { path: '', component: GnomesListComponent},
  { path: 'profile', component: GnomeProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GnomesListComponent,
    GnomeCardComponent,
    GnomeProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgxPaginationModule
  ],
  providers: [DataListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
