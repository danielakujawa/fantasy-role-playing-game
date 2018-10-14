import { Component, OnInit } from '@angular/core';
import { DataListService } from '../../services/data-list.service';

@Component({
  selector: 'app-gnome-profile',
  templateUrl: './gnome-profile.component.html',
  styleUrls: ['./gnome-profile.component.scss']
})
export class GnomeProfileComponent implements OnInit {
  gnomes: any;
  id: any;

  constructor(private DataService: DataListService) { }

  ngOnInit() {
    this.getData();
    this.id = localStorage.getItem('id');
  }

  getData() {
    this.DataService.getAllGnomes()
    .then((result) => {
      this.gnomes = result.Brastlewark;
      this.gnomes[this.id].professions = this.gnomes[this.id].professions.join(', ');
      this.gnomes[this.id].friends = this.gnomes[this.id].friends.join(', ');
    })
    .catch((error) => {
      console.log(error);
    });
  }


}
