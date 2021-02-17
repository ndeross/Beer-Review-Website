import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetReviewsService {

  constructor(private firestore: AngularFirestore) {}

  async getReviews(isAlive: boolean): Promise<any[]> {
    const Reviews: any[] = [];

    this.firestore
      .collection<'Reviews'>('Reviews', (ref) =>
        ref.orderBy('rating', 'desc').limit(10))
      .get()
      .pipe(
        takeWhile(() => isAlive)
      )
      .subscribe((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          Reviews.push(doc.data());
        });
      });
    return Reviews;
  }
}
