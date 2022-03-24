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
                <div class="modal-footer">
                  <button type="submit" class="btn btn-outline-warning" 
                  (click)="grabar_user_logIn()">Log In</button>
                </div>
              </form>
            </div>
          `,
  styleUrls: ['./my-pop-up.component.css']
})
export class MyPopupComponent implements OnInit {

  @Input() title: any;
  email: string = "";
  password: string = "";
  count: number = 0;
  userModel = new UserData('')


  constructor(public activeModal: NgbActiveModal, private service:StarshipsServiceService) {}

  ngOnInit(): void {
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