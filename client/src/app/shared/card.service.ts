import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardsChanged = new Subject<Card[]>();
  onEditMode = new ReplaySubject<number>();

  private cards: Card[] = [
    new Card("ford","flg","MI","100B","sym","fordimg","1927","parent","0000000000","heivj nncijijv jjiejviuejuvierj ncuiviuvje huehuvhuervh"),
    new Card("fordooo","flg","MI","100B","sym","fordimg","1927","parent","0000000000","jnvjernvv jnvjervje iuwhuihiewi hiurehjvier heiuvheirhvier")
  ];

  constructor() { }

  getCards(){
    return this.cards.slice();
  }

  getCard(index: number){
    return this.cards[index];
  }

  saveCarDetails(car: Card){
    this.cards.push(car);
    this.cardsChanged.next(this.getCards());
  }

  updateCard(index: number, newCard: Card){
    this.cards[index] = newCard;
    this.cardsChanged.next(this.getCards());
  }

  deleteCard(index: number){
    this.cards.splice(index,1);
    this.cardsChanged.next(this.getCards());
  }

}
