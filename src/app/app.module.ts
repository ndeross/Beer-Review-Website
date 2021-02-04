import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopTenTable } from './TopTenTable/TopTenTable.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { MerchPageComponent } from './merch-page/merch-page.component';
import { ReviewCardComponent } from './review-card/review-card.component';

// Firebase config imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { NewReviewFormComponent } from './new-review-form/new-review-form.component';
import { MatSelectModule } from '@angular/material/select';
// Database config object
const config = {
  apiKey: 'AIzaSyDVMrIvjD52NRQyEytcqMzlAGZqPFzB0J4',
  authDomain: 'beerreviewguy-ae697.firebaseapp.com',
  projectId: 'beerreviewguy-ae697',
  storageBucket: 'beerreviewguy-ae697.appspot.com',
  messagingSenderId: '329926077564',
  appId: '1:329926077564:web:4993aa6c6a178d4363adf9',
  measurementId: 'G-BKNR9GP7TC',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopTenTable,
    HomepageComponent,
    ReviewPageComponent,
    MerchPageComponent,
    ReviewCardComponent,
    NewReviewFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
