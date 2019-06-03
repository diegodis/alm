import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  public hotels = [];

  constructor(private hotelsService:HotelsService){
  }

  ngOnInit() {
    this.obtenerHoteles();
  }

  obtenerHoteles(){
    this.hotelsService.getHoteles()
    .subscribe(data => this.hotels = data);
  }

  getHotelsFilter(hotelName:string, hotelStars:string){
    this.hotelsService.getHotelsParameters(hotelName, hotelStars)
    .subscribe(data => this.hotels = data);
  }

  counter(i: number) {
    return new Array(i);
  }

}
