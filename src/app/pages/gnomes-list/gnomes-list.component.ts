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
  thumbnail: any;
  name: any;
  professions: any;
  id: any;
  arrayAllProfessions: Array<any> = [];
  arrayUniqueProfessions: Array<any> = [];
  arrayFilteredGnomes: Array<any> = [];


  constructor(private DataService: DataListService) {}

  ngOnInit() {
    this.getData();
    localStorage.setItem('id', '');
  }

  getData() {
    this.DataService.getAllGnomes()
      .then((result) => {
        this.gnomes = result.Brastlewark;
        this.getAllProfessions(this.gnomes);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  getAllProfessions(result) {
    for (let i = 0; i < result.length; i++) {
      for (let ix = 0; ix < result[i].professions.length; ix++) {
        this.arrayAllProfessions.push(result[i].professions[ix]);
      }
    }
    this.getUniqueProfessions();
  }


  getUniqueProfessions() {
    this.arrayAllProfessions.reduce((a, b) => {
      if (this.arrayUniqueProfessions.indexOf(b) < 0) {
        this.arrayUniqueProfessions.push(b);
        return a;
      }
    }, []);
  }

  submit(value) {

    this.DataService.getByProfession(value); {
      this.arrayFilteredGnomes = [];
      this.gnomes.forEach(gnome => {
        gnome.professions.forEach(profession => {
          if (profession === value) {
            this.arrayFilteredGnomes.push(gnome);
          }
        });
      });

    }
   }
}
