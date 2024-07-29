import { Routes } from '@angular/router';
import { ProductOrderComponent } from './product-order/product-order.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-order',
    pathMatch: 'full'
  },
  {
    path: 'product-order',
    component: ProductOrderComponent
  },
];
