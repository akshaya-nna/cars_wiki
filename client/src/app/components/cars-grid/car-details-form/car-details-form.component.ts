import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CardService } from 'src/app/shared/card.service';
import { HttpService } from 'src/app/shared/http.service';
import { Card } from 'src/app/shared/card.model';

@Component({
  selector: 'app-car-details-form',
  templateUrl: './car-details-form.component.html',
  styleUrls: ['./car-details-form.component.css']
})
export class CarDetailsFormComponent implements OnInit {
  id: number;
  urlId: string;
  editMode = false; 
  carForm: FormGroup;

  constructor(private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService) { }

  ngOnInit() {
        this.route.params
        .subscribe((params : Params)=>{
            this.id = params['id'];                        
            this.editMode = params['id'] != null;  
            if(this.editMode){
              this.urlId = this.cardService.getCard(this.id)._id;
            }          
            this.initForm();
        });   
  }

  onSubmit() {
    if (this.editMode) {
      this.httpService.editCard(this.carForm.value, this.urlId )
        .subscribe((editedCard : Card)=>{
          this.cardService.updateCard(this.id, editedCard);
          this.router.navigate(['cars-grid']);
        });      
    } else {
      this.httpService.saveCard(this.carForm.value)
        .subscribe((newcar: Card) => {
          this.cardService.setCards(newcar);
          this.router.navigate(['cars-grid']);
        });
    }
    this.editMode = false;
  }

  private initForm() {
    let brand = '';
    let flagship = '';
    let location = '';
    let revenue = '';
    let symbol = '';
    let carImg = '';
    let year = '';
    let parentOrg = '';
    let csnum = '';
    let description = '';

    if (this.editMode) {
      const card = this.cardService.getCard(this.id);
      brand = card.brand;
      flagship = card.flagship;
      location = card.location;
      revenue = card.revenue;
      symbol = card.symbol;
      carImg = card.carImg;
      year = card.year;
      parentOrg = card.parentOrg;
      csnum = card.csnum;
      description = card.description;
    }

    this.carForm = new FormGroup({
      'brand': new FormControl(brand, Validators.required),
      'flagship': new FormControl(flagship, Validators.required),
      'location': new FormControl(location, Validators.required),
      'revenue': new FormControl(revenue),
      'symbol': new FormControl(symbol, Validators.required),
      'carImg': new FormControl(carImg, Validators.required),
      'year': new FormControl(year, Validators.required),
      'parentOrg': new FormControl(parentOrg),
      'csnum': new FormControl(csnum),
      'description': new FormControl(description)
    });
  }
}
