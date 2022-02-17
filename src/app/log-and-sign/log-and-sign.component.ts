import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MyPopUpSignComponent } from '../my-pop-up-sign/my-pop-up-sign.component';
import { MyPopupComponent } from '../my-pop-up/my-pop-up.component';


@Component({
  selector: 'app-log-and-sign',
  templateUrl: './log-and-sign.component.html',
  styleUrls: ['./log-and-sign.component.css']
})
export class LogAndSignComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  login() {
    const modalRef = this.modalService.open(MyPopupComponent);
    modalRef.componentInstance.title = 'Log In';
    modalRef.componentInstance.text = "Username or Email Address";
    modalRef.componentInstance.text_2 = "Password";
  }
  
  signup(){
    const modalRef = this.modalService.open(MyPopUpSignComponent);
    modalRef.componentInstance.title = 'Sign Up';
    modalRef.componentInstance.text = "Username";
    modalRef.componentInstance.text_2 = "Email Address";
    modalRef.componentInstance.text_3 = "Password";
  }
}
