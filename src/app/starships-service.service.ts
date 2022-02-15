import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ships } from './Ships';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsServiceService {
  // path = "https://swapi.dev/api/starships/";
  
  constructor(private http: HttpClient){
    // this.http.get(this.path);
  }
  public getShips(page:number): Observable<Ships[]>{
    let path = `https://swapi.dev/api/starships/?page=${page}`
    console.log(path);
    console.log(this.http.get<Ships[]>(path))
 
    return this.http.get<Ships[]>(path);
  }

}
