import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CardService } from 'src/app/shared/card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit, OnDestroy {
  card: Card;
  id: number;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
    private cardService: CardService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.card = this.cardService.getCard(this.id);
        }
      );
    this.subscription = this.cardService.cardsChanged
        .subscribe((cards)=>{
            this.card = cards[this.id];
        })
  }

  onEdit() {
    this.router.navigate(['form']);   
    this.cardService.onEditMode.next(this.id);    
  }

  onDelete() {
    this.cardService.deleteCard(this.id);
    this.router.navigate(['cars-grid']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
