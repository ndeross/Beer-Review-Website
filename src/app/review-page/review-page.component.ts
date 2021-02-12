import { BEERTYPES } from './../BeerTypes';
import { NewReviewFormComponent } from './../new-review-form/new-review-form.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BEERTYPES_incAll } from '../BeerTypes_incALL';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css'],
})
export class ReviewPageComponent implements OnInit {
  beerTypes = BEERTYPES_incAll;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  showVar: boolean = false;

  get f() {
    return this.reviewForm.controls;
  }

  reviewForm = this.formBuilder.group({
    beerType: '',
  });

  toggleChild() {
    this.showVar = !this.showVar;
  }
}
