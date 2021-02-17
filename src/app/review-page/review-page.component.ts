import { BeerType } from './../BeerTypes';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { BEERTYPES_incAll } from '../BeerTypes_incALL';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css'],
})
export class ReviewPageComponent {

  beerTypes: BeerType[] = BEERTYPES_incAll;

  constructor(private formBuilder: FormBuilder) {}

  showVar: boolean = false;

  get f(): { [key: string]: AbstractControl } {
    return this.reviewForm.controls;
  }

  reviewForm: FormGroup = this.formBuilder.group({
    beerType: '',
  });

  toggleChild(): void {
    this.showVar = !this.showVar;
  }
}
