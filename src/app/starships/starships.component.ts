import { Component, OnInit } from '@angular/core';
import { StarshipsServiceService } from '../starships-service.service';
import { Ships } from '../Ships';

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
 
  constructor(private starshipsService:StarshipsServiceService) { }

  ngOnInit(): void {
  }
  

  getAllShips(page:number){
    this.starshipsService.getShips(page)
    .subscribe(ships=>{
      this.users = ships;
      console.log(ships)
      this.users.results.map((entry: 
        { name: string; model:string; url:string, manufacturer:string, cost_in_credits:string,
          length:string, max_atmosphering_speed:string, crew:string})=>{ 
        let url:string = this.numberShip(entry.url);
        
        let nau:Ships = new Ships(entry.name, entry.model, url, entry.manufacturer, 
          entry.cost_in_credits, entry.length, entry.max_atmosphering_speed, entry.crew)
        this.arrayShips.push(nau);
        
      })
    })
    // Posem el botó a true, per mostrar el botó de obtenir mes naus
    setTimeout( () => {
      this.page_number++;
      return this.boto = !this.boto;
   }, 1000);
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

}
