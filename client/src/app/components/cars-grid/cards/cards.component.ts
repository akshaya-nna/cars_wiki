import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Card } from '../../../shared/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[] = [
    new Card("ford","flg","MI","100B","sym","fordimg","1927","parent","0000000000","heivj nncijijv jjiejviuejuvierj ncuiviuvje huehuvhuervh"),
    new Card("fordooo","flg","MI","100B","sym","fordimg","1927","parent","0000000000","jnvjernvv jnvjervje iuwhuihiewi hiurehjvier heiuvheirhvier")
  ];

  @Output() cardSelected= new EventEmitter<Card>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(card:Card){
    this.cardSelected.emit(card);
  }


}
