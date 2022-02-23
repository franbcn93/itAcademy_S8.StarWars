import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ships } from './Ships';
import { Observable } from 'rxjs';
import { Target } from './Target';

@Injectable({
  providedIn: 'root'
})
export class StarshipsServiceService {
  arraySignUp:SignUp[]=[];
  arrayLogIn:LogIn[]=[];
  arrayPilots:String[]=[];
  shipTarget:Array<Target>=[];
  nom:String[]=[];
  shipsT:any;
  
  constructor(private http: HttpClient){

  }
  public getShips(page:number): Observable<Ships[]>{
    let path = `https://swapi.dev/api/starships/?page=${page}`
    console.log(path);
    console.log(this.http.get<Ships[]>(path))
 
    return this.http.get<Ships[]>(path);
  }

  public getTargets(array:Array<String>, numberShip:number): Observable<Target[]>{
    this.shipTarget = [];
    for (let i=0; i < array[numberShip].length; i++){
      let path = array[numberShip][i];
      console.log(this.http.get<Target[]>(path));

      (this.http.get<Target[]>(array[numberShip][i]).subscribe(ship=>{
        this.shipsT = ship;
        let nau:Target = new Target(this.shipsT.name, this.shipsT.height, this.shipsT.mass, 
          this.shipsT.hair_color, this.shipsT.skin_color, this.shipsT.eye_color);
        this.shipTarget.push(nau)
      }));

      console.log(this.shipTarget)
    }
    
    return this.http.get<Target[]>(array[numberShip][0]);
  }


  public setSignUp(username:string, email:string, password:string){
    let dadesSignIn = new SignUp(username, email, password);
    this.arraySignUp.push(dadesSignIn);
    localStorage.setItem("usuari SignUp: ", JSON.stringify(this.arraySignUp));
    console.log(this.arraySignUp);
  }

  public setLogIn(username:string, password:string){
    let dadesLogIn = new LogIn(username, password);
    this.arrayLogIn.push(dadesLogIn);
    localStorage.setItem("usuari LogIn: ", JSON.stringify(this.arrayLogIn));
    console.log(this.arrayLogIn);
  }

  public getAllUsers(){
    return this.arraySignUp;
  }

  public getLogIn(){
    return this.arrayLogIn;
  }

  public setAllPilots(array:Array<String>, numberShip:number){
    this.arrayPilots = [];
    this.arrayPilots.push(array[numberShip]);

    return this.arrayPilots;
  }

  public getAllPilots(){
    return this.shipTarget;
  }

}

export class SignUp{
  username:string;
  email:string;
  password:string;

  constructor(username: string, email:string,password:string){
    this.username = username;
    this.email=email;
    this.password=password;
  }
}

export class LogIn{
  username:string;
  password:string;

  constructor(username: string,password:string){
    this.username = username;
    this.password=password;
  }
}