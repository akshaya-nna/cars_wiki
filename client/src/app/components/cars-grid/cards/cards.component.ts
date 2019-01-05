import { Component, OnInit, OnDestroy } from '@angular/core';

import { Card } from '../../../shared/card.model';
import { CardService } from 'src/app/shared/card.service';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  cards: Card[];
  subscription: Subscription;

  constructor(private cardService: CardService,
    private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getCards()
      .subscribe((cars: Card[]) => {
        this.cardService.setAllCards(cars);        
      });    

    this.subscription = this.cardService.cardsChanged
      .subscribe(
        (cards: Card[]) => {
          this.cards = cards;
        }
      );
    // this.cards = this.cardService.getCards();
  }

  // emitClick(index: number){
  //   this.cardService.onEditMode.next(index);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
