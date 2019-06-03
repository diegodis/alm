import { Component, OnInit, Input } from '@angular/core';
import { HotelsComponent } from '../hotels/hotels.component'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

 @Input() hotels:HotelsComponent;

  hotelName:string;
  hotelStars:string;

  constructor() { }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(i);
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
