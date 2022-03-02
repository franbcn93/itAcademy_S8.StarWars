import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Target } from '../Target';
import { StarshipsServiceService } from '../starships-service.service';


@Component({
  selector: 'app-target-pilot',
  template: `
            <div class="modal-header" >
              <div>
                <h4 class="modal-title" >
                  {{nave.name}}  </h4>
                <div class="modal-body">
                  <p>Height: {{nave.height}}</p>
                  <p>Mass: {{nave.mass}}</p>
                  <p>Hair_color: {{nave.hair_color}}</p>
                  <p>Skin color: {{nave.skin_color}}</p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-warning" 
              (click)="activeModal.close('Close click')">Close</button>
            </div>
          `,
  styleUrls: ['./target-pilot.component.css']
})
export class TargetPilotComponent implements OnInit {

  // targets:Array<Target>[]=[];
  @Input() nave:any;


  constructor(public activeModal: NgbActiveModal, private service:StarshipsServiceService) { 
    // this.arrays();
  }

  ngOnInit(): void {
  }

  // arrays(){
  //   this.targets.push(this.service.getAllPilots());
  //   console.log(this.targets, this.nave);
  // }
  
  

}

