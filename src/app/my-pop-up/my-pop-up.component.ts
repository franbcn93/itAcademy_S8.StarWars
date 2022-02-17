import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
              <input type="text" placeholder={{text_2}} (change)="setPassword($event)">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-warning" 
              (click)="activeModal.close('Close click')" (click)="grabar_user_logIn()">Log In</button>
            </div>
          `,
  styleUrls: ['./my-pop-up.component.css']
})
export class MyPopupComponent implements OnInit {

  @Input() title: any;
  @Input() text: any;
  @Input() text_2: any;
  @Input() username:string = "";
  @Input() password:string = "";

  constructor(public activeModal: NgbActiveModal, private service:StarshipsServiceService) {}

  ngOnInit(): void {
  }

  setUsername(event:any){
    this.username = event.target.value;
  } 

  setPassword(event:any){
    this.password = event.target.value;
  }

  grabar_user_logIn(){
    this.service.setLogIn(this.username, this.password);
  }

}