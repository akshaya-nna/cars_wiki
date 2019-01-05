import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { CardService } from './card.service';
import { Card } from './card.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient,
    private cardService: CardService) { }

  getCards() {    
    return this.httpClient.get<Card[]>('http://localhost:3000/carswiki')
      // .pipe(map((cars)=> {}      
      .subscribe(
        (cars: Card[]) => {
          if (cars && cars.length) {
            for (let car of cars) {
              this.cardService.setCards(car);
            }
            this.cardService.cardsChanged.next(cars);
          }
        }
      );
  }

  // editCard(card: Card){
  //   return this.httpClient.put<Card>('http://localhost:3000/carswiki', card)
  // }

  saveCard(card: Card): Observable<Card> {
    return this.httpClient.post<Card>('http://localhost:3000/carswiki', card)
  }

}