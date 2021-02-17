import { MerchPageComponent } from './merch-page/merch-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'review-page', component: ReviewPageComponent },
  // { path: 'merch-page', component: MerchPageComponent }
  { path: 'merch', loadChildren: () =>
          import('./merch/merch.module')
            .then(m => m.MerchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
