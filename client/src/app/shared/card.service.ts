import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

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

}
