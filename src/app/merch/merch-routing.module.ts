import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchContainerComponent } from './components/merch-container/merch-container.component';
import { MerchDetailComponent } from './components/merch-detail/merch-detail.component';

const routes: Routes = [
  { path: '', component: MerchContainerComponent, pathMatch: 'full' },
  { path: ':id', component: MerchDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchRoutingModule {

 }
