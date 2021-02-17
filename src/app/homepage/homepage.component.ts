import { BEERTYPES_incAll } from './../BeerTypes_incALL';
import { Component, OnDestroy } from '@angular/core';
import { BeerType } from '../BeerTypes';
import { GetReviewsService } from '../shared/services/get-reviews.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnDestroy {
  // I'll show you guys how this stuff works, need to have an unsubscribe to prevent memory leaks, could by why your Firebase was getting so many queries
  private isAlive: boolean = true;

  REVIEWS;
  beerTypes: BeerType[] = BEERTYPES_incAll;

  constructor(private service: GetReviewsService) {}

  ngAfterViewInit(): void {
    this.service.getReviews(this.isAlive).then((reviews) => {
      console.log(reviews);
      this.REVIEWS = reviews;
    });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
