import { BEERTYPES } from './../BeerTypes';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-review-form',
  templateUrl: './new-review-form.component.html',
  styleUrls: ['./new-review-form.component.css'],
})
export class NewReviewFormComponent implements OnInit {
  @Input() showMePartially: boolean;

  beerTypes = BEERTYPES;
  date = new Date();

  get f() {
    return this.reviewForm.controls;
  }

  reviewForm = this.formBuilder.group({
    beerName: '',
    rating: [0, [Validators.min(0.0), Validators.max(10.0)]],
    beerType: '',
    content: '',
    date: this.date.toLocaleDateString('en-US'),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(JSON.parse(JSON.stringify(this.reviewForm.value)));
  }
}
