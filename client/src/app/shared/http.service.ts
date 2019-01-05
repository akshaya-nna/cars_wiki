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
  }

  saveCard(card: Card): Observable<Card> {
    return this.httpClient.post<Card>('http://localhost:3000/carswiki', card)
  }

  editCard(card: Card, id: string) {
    return this.httpClient.put<Card>('http://localhost:3000/carswiki/' + id, card)
  }

  deleteCard(id: string) {
    return this.httpClient.delete<Card>('http://localhost:3000/carswiki/' + id)
  }


}
