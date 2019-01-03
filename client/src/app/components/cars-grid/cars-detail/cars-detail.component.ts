import { Component, OnInit} from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { ActivatedRoute, Params } from '@angular/router';
import { CardService } from 'src/app/shared/card.service';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {
  card: Card;
  id: number;

  constructor(private route: ActivatedRoute,
              private cardService: CardService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params)=>{
          this.id= +params['id'];
          this.card = this.cardService.getCard(this.id);
        }
      );
  }

}
