import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataListService } from '../../services/data-list.service';

@Component({
  selector: 'app-gnomes-list',
  templateUrl: './gnomes-list.component.html',
  styleUrls: ['./gnomes-list.component.scss']
})

export class GnomesListComponent implements OnInit {

  gnomes: any;
  professions: Array<string> = [];

  constructor(private DataService: DataListService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.DataService.getAllGnomes()
      .then((result) => {
        this.gnomes = result.Brastlewark;
        this.getAllProfessions(this.gnomes);
        console.log(this.gnomes);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  getAllProfessions(result) {
    for (let i = 0; i < result.length; i++) {
      for (let ix = 0; ix < result[i].professions.length; ix++) {
        console.log(result[i].professions[ix]);
      }
    }
  }
}
