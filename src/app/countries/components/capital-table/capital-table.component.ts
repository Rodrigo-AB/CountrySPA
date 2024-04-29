import { Component, Input } from '@angular/core';
import { Capital } from '../../interfaces/capital';

@Component({
  selector: 'capitals-table',
  templateUrl: './capital-table.component.html',
  styles: [
    `img {
      width:  25px;
    }`
    ]
})

export class CapitalTableComponent {

  @Input()
  public capitals: Capital[]  = [];

}
