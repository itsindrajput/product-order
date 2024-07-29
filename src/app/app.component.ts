import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductRowComponent } from "./product-row/product-row.component";
import { ProductOrderComponent } from "./product-order/product-order.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductRowComponent, ProductOrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
}
