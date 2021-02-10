import { AngularFirestore } from '@angular/fire/firestore';

import { Component, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css'],
})
export class ReviewCardComponent {
  private renderer: Renderer2;

  REVIEWS; 

  constructor(private firestore: AngularFirestore) {}

  ngAfterViewInit() {
    this.getReviews().then((reviews) => {
      this.REVIEWS = reviews;
    });
  }

  ngOnInit(): void {}

  async getReviews() {

    // Ben - good example of a query here
    const Reviews = [];
    await this.firestore
      .collection<'Reviews'>('Reviews', (ref) => ref.orderBy('date', 'desc'))
      .get()
      .subscribe((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          Reviews.push(doc.data());
        });
      });

    return Reviews;
  }
}
