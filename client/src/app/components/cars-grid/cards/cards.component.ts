import { Component, OnInit, OnDestroy } from '@angular/core';

import { Card } from '../../../shared/card.model';
import { CardService } from 'src/app/shared/card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  cards: Card[];
  subscription: Subscription;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.subscription = this.cardService.cardsChanged
      .subscribe(
        (cards: Card[]) => {
          this.cards = cards;
        }
      );
    this.cards = this.cardService.getCards();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
