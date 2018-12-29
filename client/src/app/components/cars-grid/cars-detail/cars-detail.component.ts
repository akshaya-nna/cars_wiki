import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/shared/card.model';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {
  @Input() card:Card;
  constructor() { }

  ngOnInit() {
  }

}
