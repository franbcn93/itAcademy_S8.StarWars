import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StarshipsServiceService } from '../starships-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-pop-up-sign',
  template: `
            <div class="modal-header">
              <h4 class="modal-title">{{title}}</h4>
              <button type="button" class="close" aria-label="Close" 
              (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input type="text" placeholder={{text}} (change)="setUsername($event)">
              <p>{{nameReq}}</p>
              <input type="email" placeholder={{text_2}} (change)="setEmail($event)">
              <p>{{emailReq}}</p>
              <input type="password" placeholder={{text_3}} (change)="setPassword($event)">
              <p>{{passwordReq}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-warning" 
               (click)="grabar_user_signUp()">Sign Up</button>
            </div>
            
          
          `,
  styleUrls: ['./my-pop-up-sign.component.css']
  
})
export class MyPopUpSignComponent implements OnInit {

  @Input() title: any;
  @Input() text: any;
  @Input() text_2: any;
  @Input() text_3: any;
  @Input() username:string = "";
  @Input() email:string = "";
  @Input() password:string = "";
  emailReq:string = "";
  passwordReq:string = "";
  nameReq:string = "";
  count: number = 0;
  

  myUser: string="";
  nombre: string = "Paco"
  persona =  {
    nombre:"Fran",
    edad:41
  }

  constructor(public activeModal: NgbActiveModal, private service:StarshipsServiceService) {
   
  }
  
  ngOnInit(): void {
  }
  
  setUsername(event:any){
    this.username = event.target.value;
  } 
  
  setEmail(event:any){
    this.email = event.target.value;
  }

  setPassword(event:any){
    this.password = event.target.value;
  }

  grabar_user_signUp(){
    this.fieldEmpty(this.username, this.email, this.password);
    if(this.count === 3){
      this.service.setSignUp(this.username, this.email, this.password);
      this.activeModal.close();      
    }
    
  }

  fieldEmpty(name:string, email:string, password:string){
    this.count = 0;
    if(this.username === ""){
      this.nameReq = "Name is required";
    }else{
      this.nameReq = "";
      this.count++;
    }
    if(this.email === ""){
      this.emailReq = "Email is required";
    }else{
      
      this.emailReq = "";
      this.count++;
    }
    if(this.password === ""){
      this.passwordReq = "Password is required";
    }else{
      this.passwordReq === "";
      this.count++;
    }
  }
}

