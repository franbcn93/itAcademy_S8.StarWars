import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Target } from '../Target';
import { StarshipsServiceService } from '../starships-service.service';


@Component({
  selector: 'app-target-pilot',
  template: `
            <div class="modal-header" *ngFor="let ship of targets; let i=index">
              <div *ngFor="let each of ship">
                <h4 class="modal-title" >
                  {{each.name}}  </h4>
                <div class="modal-body">
                  <p>Height: {{each.height}}</p>
                  <p>Mass: {{each.mass}}</p>
                  <p>Hair_color: {{each.hair_color}}</p>
                  <p>Skin color: {{each.skin_color}}</p>
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

  targets:Array<Target>[]=[];

  constructor(public activeModal: NgbActiveModal, private service:StarshipsServiceService) { 
    this.arrays();
  }

  ngOnInit(): void {
  }

  arrays(){
    this.targets.push(this.service.getAllPilots());
    console.log(this.targets);
  }
  
  

}

