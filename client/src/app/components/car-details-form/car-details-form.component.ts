import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CardService } from 'src/app/shared/card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car-details-form',
  templateUrl: './car-details-form.component.html',
  styleUrls: ['./car-details-form.component.css']
})
export class CarDetailsFormComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  subscription: Subscription;
  carForm: FormGroup;

  constructor(private cardService: CardService,
    private router: Router) { }

  ngOnInit() {
    this.subscription=this.cardService.onEditMode
      .subscribe(
        (id: number) => {
          this.id = id;
          this.editMode = true;
        }
      );
    this.initForm();
  }

 onSubmit(){
   if(this.editMode){
     this.cardService.updateCard(this.id,this.carForm.value);     
   }else {
     this.cardService.saveCarDetails(this.carForm.value);     
   }
   this.editMode = false;
   this.router.navigate(['cars-grid'])

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
      'symbol': new FormControl(symbol,Validators.required),
      'carImg': new FormControl(carImg, Validators.required),
      'year': new FormControl(year, Validators.required),
      'parentOrg': new FormControl(parentOrg),
      'csnum': new FormControl(csnum),
      'description': new FormControl(description)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
