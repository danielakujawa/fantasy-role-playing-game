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

  ngOnInit() {
    this.DataService.getAllGnomes()
    .then((result) => {
     this.gnomes = result;
    console.log(this.gnomes);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  constructor(private DataService: DataListService) {}

}
