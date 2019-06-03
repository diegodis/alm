import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { Hotel } from './hotel';
import { Observable , of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HotelsService{

  _url:string = 'http://localhost:4850';

  constructor(private http:HttpClient){  }

  getHoteles():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this._url );
  }

  getHotelsParameters(name:string, stars:string):Observable<Hotel[]>{
    let params = new HttpParams();
    if(name != undefined && name != ""){
      params = params.append('name', name);
    }
    if(stars != undefined){
      params = params.append('stars', stars);
    }
    return this.http.get<Hotel[]>(this._url , {params:params});
  }

}
