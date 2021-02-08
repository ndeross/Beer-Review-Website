import { NewReviewFormComponent } from './../new-review-form/new-review-form.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css'],
})
export class ReviewPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showVar: boolean = false;

  toggleChild() {
    this.showVar = !this.showVar;
  }
}
