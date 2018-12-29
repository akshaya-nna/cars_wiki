import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Card } from '../../../../shared/card.model'

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  @Input() card: Card;
  @Output() selectedCard = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelectCard(){
    this.selectedCard.emit();
  }

}
