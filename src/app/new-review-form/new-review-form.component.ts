import { BeerType, BEERTYPES } from './../BeerTypes';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-new-review-form',
  templateUrl: './new-review-form.component.html',
  styleUrls: ['./new-review-form.component.css'],
})
export class NewReviewFormComponent {
  @Input() showMePartially: boolean;

  //! Add tying to every variable that you can
  // The reason I say that is because Steve and the devs are particular about not having "any" types in angular apps
  // that's what makes TypeScript a powerful development language

  //? If you hover over a variable, it will actually tell you the type as long as you have some Angular /TS extensions installed

  beerTypes: BeerType[] = BEERTYPES;

  date: Date = new Date();

  get f(): { [key: string]: AbstractControl } {
    return this.reviewForm.controls;
  }

  CheckForm(): boolean {
    //* removed else statement, will automatically return false if condition not met
    if (this.reviewForm.valid)
      return true;
  }

  reviewForm: FormGroup = this.formBuilder.group({
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

  // This function handles adding a review to the firebase
  onSubmit(): void {
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
