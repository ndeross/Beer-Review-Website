import { BEERTYPES_incAll } from './../BeerTypes_incALL';

import { REVIEWS } from './../mockreviews';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-TopTenTable',
  templateUrl: './TopTenTable.component.html',
  styleUrls: ['./TopTenTable.component.css'],
})
export class TopTenTable {
  REVIEWS;
  beerTypes = BEERTYPES_incAll;

  constructor(private firestore: AngularFirestore) {}

  ngAfterViewInit() {
    this.getReviews().then((reviews) => {
      console.log(reviews);
      this.REVIEWS = reviews;
    });
  }

  ngOnInit(): void {}

  // async functions are cool but also suck a little bit
  async getReviews() {
    const Reviews = [];

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
