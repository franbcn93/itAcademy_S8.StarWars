import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ships } from './Ships';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsServiceService {
  arraySignUp:SignUp[]=[];
  arrayLogIn:LogIn[]=[];
  
  constructor(private http: HttpClient){

  }
  public getShips(page:number): Observable<Ships[]>{
    let path = `https://swapi.dev/api/starships/?page=${page}`
    console.log(path);
    console.log(this.http.get<Ships[]>(path))
 
    return this.http.get<Ships[]>(path);
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