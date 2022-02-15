export class Ships {
 
    public name: string;
    public model: string;
    public url: string;
    public manufacturer: string;
    public cost_in_credits:string;
    public length_ship:string;
    public max_atmosphering_speed:string;
    public crew:string;
   
    constructor(name:string, model:string, url:string, manufacturer:string, cost_in_credits:string,
       length:string, max_atmosphering_speed:string, crew:string) {
      this.name = name;
      this.model = model;
      this.url = url;
      this.manufacturer = manufacturer;
      this.cost_in_credits = cost_in_credits;
      this.length_ship = length;
      this.max_atmosphering_speed = max_atmosphering_speed;
      this.crew = crew;
    }
     
  }
