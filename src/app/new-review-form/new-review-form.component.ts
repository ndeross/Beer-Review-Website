import { BEERTYPES } from './../BeerTypes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-review-form',
  templateUrl: './new-review-form.component.html',
  styleUrls: ['./new-review-form.component.css'],
})
export class NewReviewFormComponent implements OnInit {
  beerTypes = BEERTYPES;

  constructor() {}

  ngOnInit(): void {}
}
