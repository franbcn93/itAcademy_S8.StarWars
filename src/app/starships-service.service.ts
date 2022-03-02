import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ships } from './Ships';
import { Observable } from 'rxjs';
import { Target } from './Target';

@Injectable({
  providedIn: 'root'
})
export class StarshipsServiceService {
  arraySignUp:SignUp[]=[];
  arrayLogIn:LogIn[]=[];
  
  
  constructor(private http: HttpClient){

  }
  public getShips(page:number): Observable<Ships[]>{
    let path = `https://swapi.dev/api/starships/?page=${page}`;
    return this.http.get<Ships[]>(path);
  }

  public getTargets(array:Array<String>, numberShip:number): Observable<Target[]>{
    return this.http.get<Target[]>(array[numberShip][0]);
  }


  public setSignUp(username:string, email:string, password:string){
    let dadesSignIn = new SignUp(username, email, password);
    this.arraySignUp.push(dadesSignIn);
    localStorage.setItem("usuari SignUp: ", JSON.stringify(dadesSignIn));
    console.log(this.arraySignUp);
  }

  public setLogIn(username:string, password:string){
    let dadesLogIn = new LogIn(username, password);
    this.arrayLogIn.push(dadesLogIn);
    localStorage.setItem("usuari LogIn: ", JSON.stringify(dadesLogIn));
    console.log(this.arrayLogIn);
  }

  public getAllUsers(){
    return this.arraySignUp;
  }

  public getLogIn(){
    return this.arrayLogIn;
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