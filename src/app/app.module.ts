import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { MerchPageComponent } from './merch-page/merch-page.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { ProductModule } from './products/product.module';


// Firebase config imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { NewReviewFormComponent } from './new-review-form/new-review-form.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

// Config
import { config } from '../secrets';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
            { path: 'welcome', component: HomepageComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
          ]),
          ProductModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
// import { WelcomeComponent } from './home/welcome.component';
// import { ProductModule } from './products/product.module';

// @NgModule({
//   declarations: [
//     AppComponent,
//     WelcomeComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     RouterModule.forRoot([
//       { path: 'welcome', component: WelcomeComponent },
//       { path: '', redirectTo: 'welcome', pathMatch: 'full' },
//       { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
//     ]),
//     ProductModule
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
