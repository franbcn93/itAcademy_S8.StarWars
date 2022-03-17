import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StarshipsServiceService } from '../starships-service.service';

@Component({
  selector: 'app-my-popup',
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
              <p>{{emailReq}}</p>
              <input type="text" placeholder={{text_2}} (change)="setPassword($event)">
              <p>{{passwordReq}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-warning" 
               (click)="grabar_user_logIn()">Log In</button>
            </div>
          `,
  styleUrls: ['./my-pop-up.component.css']
})
export class MyPopupComponent implements OnInit {

  @Input() title: any;
  @Input() text: any;
  @Input() text_2: any;
  @Input() email:string = "";
  @Input() password:string = "";
  emailReq:string = "";
  passwordReq:string = "";
  count: number = 0;

  constructor(public activeModal: NgbActiveModal, private service:StarshipsServiceService) {}

  ngOnInit(): void {
  }

  setUsername(event:any){
    this.email = event.target.value;
  } 

  setPassword(event:any){
    this.password = event.target.value;
  }

  grabar_user_logIn(){
    this.fieldEmpty(this.email, this.password);
    if(this.count === 2){
      this.service.setSignUp(this.email, this.email, this.password);
      this.activeModal.close();      
    }
  }

  fieldEmpty(email:string, password:string){
    this.count = 0;
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