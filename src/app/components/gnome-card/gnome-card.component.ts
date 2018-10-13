import { Component, OnInit, Input} from '@angular/core';
import { GnomesListComponent } from '../../pages/gnomes-list/gnomes-list.component';

@Component({
  selector: 'app-gnome-card',
  templateUrl: './gnome-card.component.html',
  styleUrls: ['./gnome-card.component.scss']
})
export class GnomeCardComponent implements OnInit {

  @Input() gnome: GnomesListComponent;

  constructor() { }

  ngOnInit() {
  }

}
