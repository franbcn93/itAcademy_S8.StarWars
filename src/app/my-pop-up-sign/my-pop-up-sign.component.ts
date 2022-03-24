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
            
            <div class="modal-body_2">
              <form class="custom-form" method="post">
                <input
                  type="email"
                  [(ngModel)]="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
                <input
                  type="password"
                  [(ngModel)]="password"
                  name="password"
                  placeholder="Password"
                  required="required"
                />
                <input
                  type="password"
                  [(ngModel)]="confirmPassword"
                  name="password"
                  placeholder="Repeat the password"
                  required="required"
                />
                <div class="modal-footer">
                  <button type="submit" class="btn btn-outline-warning" 
                   (click)="grabar_user_signUp()"
                  >Sign Up</button>
                </div>
              </form>
            </div> 
          `,
  styleUrls: ['./my-pop-up-sign.component.css']
  
})
export class MyPopUpSignComponent implements OnInit {

  @Input() title: any;
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  count: number = 0;
  userModel = new UserData('')

  constructor(public activeModal: NgbActiveModal, private service:StarshipsServiceService) {
   
  }
  
  ngOnInit(): void {
  }

  grabar_user_signUp(){
    this.fieldEmpty(this.email, this.password, this.confirmPassword);
    if(this.count === 3){
      this.service.setSignUp(this.email, this.password, this.confirmPassword);
      this.activeModal.close();      
    }  
  }

  fieldEmpty(email:string, password:string, confirmPassword:string){
    this.count = 0;
    if(this.email !== ""){
      this.count++;
    }
    if(this.password !== ""){
      this.count++;
    }
    if(this.confirmPassword !== ""){
      this.count++;
    }
    if(this.password != this.confirmPassword){
      alert("Two passwords are not equals")
      this.count--;
    }
  }
}

