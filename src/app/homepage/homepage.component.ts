import { BEERTYPES_incAll } from './../BeerTypes_incALL';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BeerType } from '../BeerTypes';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {

  //! add types for this
  REVIEWS;
  beerTypes: BeerType[] = BEERTYPES_incAll;

  constructor(private firestore: AngularFirestore) {}

  ngAfterViewInit(): void {
    this.getReviews().then((reviews) => {
      console.log(reviews);
      this.REVIEWS = reviews;
    });
  }

  // async functions are cool but also suck a little bit

  //! need to get rid of the `any` types here
  async getReviews(): Promise<any[]> {
    const Reviews: any[] = [];

    // this is all one line of code lmao

    await this.firestore
      .collection<'Reviews'>('Reviews', (ref) =>
        ref.orderBy('rating', 'desc').limit(10)
      )
      .get()
      .subscribe((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          Reviews.push(doc.data());
        });
      });

    return Reviews;
  }
}
