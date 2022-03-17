import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StarshipsServiceService } from '../starships-service.service';
import { UserData } from '../../user-data';

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
            <input type="email" #email="ngModel" [class.is-invalid]="email.invalid && email.touched"
                    required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" class="form-control" name="secondaryEmail"
                    [(ngModel)]="userModel.address" placeholder={{text}} (change)="setUsername($event)"/>
              <div *ngIf="email.errors && (email.invalid || email.touched)">
                <small class="text-danger" *ngIf="email.errors.required">Email is required</small>
                <small class="text-danger" *ngIf="email.errors.pattern">Please provide a valid email address</small>
              </div>
              <input class="form-control" type="password" placeholder={{text_2}} (change)="setPassword($event)">
              <div>
                <small class="text-danger">{{passwordReq}}</small>
              </div>
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
  passwordReq:string = "Password is required";
  count: number = 0;
  userModel = new UserData('')


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
      this.service.setLogIn(this.email, this.password);
      this.activeModal.close();      
    }
  }

  fieldEmpty(email:string, password:string){
    this.count = 0;
    if(this.email !== ""){
      this.count++;
    }
    if(this.password !== ""){
      this.count++;
    }
  }
}