import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StarshipsServiceService } from '../starships-service.service';
import { UserData } from '../../user-data';

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
              <input class="form-control" type="text" placeholder={{text}} (change)="setUsername($event)">
              <div>
                <small class="text-danger">{{nameReq}}</small>
              </div>
              <input type="email" #email="ngModel" [class.is-invalid]="email.invalid && email.touched"
                    required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" class="form-control" name="secondaryEmail"
                    [(ngModel)]="userModel.address" placeholder={{text_2}} (change)="setEmail($event)"/>
              <div *ngIf="email.errors && (email.invalid || email.touched)">
                <small class="text-danger" *ngIf="email.errors.required">Email is required</small>
                <small class="text-danger" *ngIf="email.errors.pattern">Please provide a valid email address</small>
              </div>
              <input class="form-control" type="password" placeholder={{text_3}} (change)="setPassword($event)">
              <div>
                <small class="text-danger">{{passwordReq}}</small>
              </div>
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
  passwordReq:string = "Password is required";
  nameReq:string = "Name is required";
  count: number = 0;
  userModel = new UserData('')

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
    if(this.username !== ""){
      this.count++;
    }
    if(this.email !== ""){
      this.count++;
    }
    if(this.password !== ""){
      this.count++;
    }
  }
}

