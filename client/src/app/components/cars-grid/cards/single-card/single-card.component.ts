import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../../../../shared/card.model'

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  @Input() card: Card;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }


}
