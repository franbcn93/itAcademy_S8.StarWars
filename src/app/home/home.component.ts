import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MyPopupComponent } from '../my-pop-up/my-pop-up.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "Instruccions";

  constructor(private router: Router, private modalService: NgbModal) {

   }

  ngOnInit(): void {
  }

  onClicked(){
    this.router.navigateByUrl("/starships");
  }

  login() {
    const modalRef = this.modalService.open(MyPopupComponent);
    modalRef.componentInstance.title = 'Informació sobre idiomes';
    modalRef.componentInstance.text = "Aquest component indica el nombre de idiomes " +
                                      "que tindrà la seva pàgina web";
  }
}
