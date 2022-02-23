import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
           [style({ opacity: 1 }), animate('2s ease-out', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('2s ease-out', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ] // register the animations
})
export class AppComponent {
  title_1 = 'Star';
  title_2 = 'Wars';
  home = "HOME";
  starShips = "STARSHIPS";

  constructor() { }

  
}
