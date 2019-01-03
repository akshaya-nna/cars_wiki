import { Component, OnInit } from '@angular/core';

import { Card } from '../../../shared/card.model';
import { CardService } from 'src/app/shared/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }

  

}
