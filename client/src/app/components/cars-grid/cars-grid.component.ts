import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card.model';

@Component({
  selector: 'app-cars-grid',
  templateUrl: './cars-grid.component.html',
  styleUrls: ['./cars-grid.component.css']
})
export class CarsGridComponent implements OnInit {
  selectedCard:Card;
  constructor() { }

  ngOnInit() {
  }

}
