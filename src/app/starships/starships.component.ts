import { Component, OnInit } from '@angular/core';
import { StarshipsServiceService } from '../starships-service.service';
import { Ships } from '../Ships';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TargetPilotComponent } from '../target-pilot/target-pilot.component';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  arrayShips: Array<Ships>=[];
  users: any;
  boto: boolean = false;
  page_number: number = 1;
  error:string = 'Comproba la teva contrasenya o registat avanç per veure les naus';
  cardError:boolean = false;
  arrayTargets: Array<String>= [];
  orderShip:number = 0;
  shipsTarget: any;
  
 
  constructor(private starshipsService:StarshipsServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  

  getAllShips(page:number){
    if(this.userLogIn()){
      this.cardError = false;
      this.starshipsService.getShips(page)
      .subscribe(ships=>{
        this.users = ships;
        console.log(ships)
        this.users.results.map((entry: 
          { name: string; model:string; url:string, manufacturer:string, cost_in_credits:string,
            length:string, max_atmosphering_speed:string, crew:string, pilots:string})=>{ 
          let url:string = this.numberShip(entry.url);
          
          let nau:Ships = new Ships(entry.name, entry.model, url, entry.manufacturer, 
            entry.cost_in_credits, entry.length, entry.max_atmosphering_speed, entry.crew, this.orderShip
            )
          this.arrayShips.push(nau);
          this.orderShip++;

          this.arrayTargets.push(entry.pilots);
          
        })
      })
      // Posem el botó a true, per mostrar el botó de obtenir mes naus
      setTimeout( () => {
        this.page_number++;
        return this.boto = !this.boto;
     }, 3000);
    }
    else{
      this.cardError = true;
    }
  }


  // Verifiquem si l'usuari existeix
  userLogIn(){
    let allUsers = this.starshipsService.getAllUsers();
    let userLogIn = this.starshipsService.getLogIn();
    let usuari:boolean=false;
    allUsers.filter(user =>{
      userLogIn.map(u => {
        if(u.username === user.username && u.password === user.password){
          usuari = true;
        }
      })
    })
    return usuari;
  }

  numberShip(numeroNau:string){
    const number:string=numeroNau.substring(32, numeroNau.length);
    let fromTo:number = number.indexOf("/");
    let r = number.substring(0, fromTo);
    
    // Li afegeixo una imatge, ja que no tenen la nau 2, 3, 17, 32
    if(r === "2" || r === "32" || r === "3" || r === "17" 
      || r === "32" || r === "49" || r === "52" || r === "58" 
      || r === "59" || r === "61" || r === "63" || r === "64" 
      || r === "65" || r === "66" || r === "68" || r === "74"
      || r === "75"){
      const arrayNumbers = [ "5","9", "10", "11", "12", "13", "15", "21","22","23","27",
                            "28","29","31","39","40","41","43","47","48"];
      const random = arrayNumbers[Math.floor(Math.random() * arrayNumbers.length)];
      r= random;
    }
    

    let url:string = `https://starwars-visualguide.com/assets/img/starships/${r}.jpg`
    return url;
  }

  getTargets(numberShip:number){

    if((this.arrayTargets[numberShip]).length === 0){
      console.log("está vacia");
      alert("Aquesta nau es vuida i no te targetes.")
    }
    else{      
     this.starshipsService.getTargets(this.arrayTargets, numberShip)
     .subscribe(ship =>{
       const modalRef = this.modalService.open(TargetPilotComponent);
       modalRef.componentInstance.nave = ship;
     });
    }
  }

}
