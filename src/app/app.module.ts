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

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, TopTenTable, HomepageComponent, ReviewPageComponent, MerchPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
