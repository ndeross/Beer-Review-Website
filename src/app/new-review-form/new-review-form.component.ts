import { BEERTYPES } from './../BeerTypes';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-review-form',
  templateUrl: './new-review-form.component.html',
  styleUrls: ['./new-review-form.component.css'],
})
export class NewReviewFormComponent implements OnInit {
  @Input() showMePartially: boolean;

  beerTypes = BEERTYPES;

  constructor() {}

  ngOnInit(): void {}
}
