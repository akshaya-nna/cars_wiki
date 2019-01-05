import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CardService } from 'src/app/shared/card.service';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit, OnDestroy {
  card: Card;
  id: number;
  urlId: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
    private cardService: CardService,
    private router: Router,
    private httpService: HttpService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.urlId = this.cardService.getCard(this.id)._id;
          this.card = this.cardService.getCard(this.id);
        }
      );
    this.subscription = this.cardService.cardsChanged
      .subscribe((cards) => {
        this.card = cards[this.id];
      })
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });   
  }

  onDelete() {
    this.httpService.deleteCard(this.urlId)
      .subscribe((deletedCard) => {
        this.cardService.deleteCard(this.id);
        this.router.navigate(['cars-grid']);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
