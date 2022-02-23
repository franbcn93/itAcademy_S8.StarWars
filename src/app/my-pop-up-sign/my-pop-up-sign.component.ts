import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StarshipsServiceService } from '../starships-service.service';

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
            <div class="modal-body_2">
              <input type="text" placeholder={{text}} (change)="setUsername($event)">
              <input type="text" placeholder={{text_2}} (change)="setEmail($event)">
              <input type="text" placeholder={{text_3}} (change)="setPassword($event)">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-warning" 
              (click)="activeModal.close('Close click')" (click)="grabar_user_signUp()">Sign Up</button>
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
    this.service.setSignUp(this.username, this.email, this.password);
  }

  

}

