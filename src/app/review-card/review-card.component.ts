import { AngularFirestore } from '@angular/fire/firestore';
import { Component, Injectable, Renderer2 } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css'],
})
export class ReviewCardComponent {
  // private renderer: Renderer2;

  REVIEWS;

  constructor(private firestore: AngularFirestore) {}

  //todo: the service will be injected, and can be called here
  ngAfterViewInit(): void {
    this.getReviews().then((reviews) => {
      this.REVIEWS = reviews;
    });
  }

  //todo: Let's move this into a service
  async getReviews(): Promise<any[]> {

    // Ben - good example of a query here
    const Reviews = [];
    this.firestore
      .collection<'Reviews'>('Reviews', (ref) => ref.orderBy('date', 'desc'))
      .get()
      .subscribe((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          Reviews.push(doc.data());
        });
      });

    return Reviews;
  }

  //TODO: Need to unsubscribe from the Observable
  // I'll need to look into Firebase, I haven't worked with this yet so I don't have an improvement just yet
}
