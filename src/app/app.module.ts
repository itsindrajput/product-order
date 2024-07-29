import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ProductOrderComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppComponent,
    ProductOrderComponent,
    CommonModule
  ],
  bootstrap: []
})
export class AppModule { }
