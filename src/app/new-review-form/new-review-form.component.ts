import { BEERTYPES } from './../BeerTypes';
import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

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

  CheckForm() {
    if (this.reviewForm.valid) {
      return true;
    } else {
      return false;
    }
  }

  reviewForm = this.formBuilder.group({
    beerName: ['', Validators.required],
    companyName: ['', Validators.required],
    ABV: [
      null,
      [Validators.min(0.0), Validators.max(100), Validators.required],
    ],
    rating: [null, [Validators.min(0.0), Validators.max(10.0)]],
    beerType: ['', Validators.required],
    content: ['', Validators.required],
    date: Date,
  });

  constructor(
    //Initialize the form and firestore objects
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  // This function handles adding a review to the firebase
  onSubmit() {
    // Stringify the current date and set it to the object
    this.reviewForm.value.date = this.date; //.toLocaleDateString('en-US');

    this.firestore
      .collection('Reviews')
      .add(this.reviewForm.value)
      .then((res) => {
        console.log(res);
        this.reviewForm.reset();
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
