import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductRowComponent } from '../product-row/product-row.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-order',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductRowComponent],
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent {
  productRows: number[] = [0];
  order: { product: string, quantity: number }[] = [];
  showOrderSummary: boolean = false;

  onProductAdded(event: { product: string, quantity: number }, index: number) {
    this.order[index] = event;

    // Add a new row if the last row is filled and less than 8 rows exist
    if (index === this.productRows.length - 1 && this.productRows.length < 8) {
      this.productRows.push(this.productRows.length);
    }
  }

  showOrder() {
    // Filter out rows where product or quantity is missing
    this.order = this.order.filter(item => item.product && item.quantity !== null);

    // Display the order summary section
    this.showOrderSummary = true;
  }

  readOrder() {
    if (this.order.length === 0) {
      console.warn('No items in the order to read.');
      return;
    }

    const orderText = this.order.map(item => `${item.product}: ${item.quantity}`).join(', ');
    this.textToSpeech(orderText);
  }

  textToSpeech(text: string) {
    const apiKey = '959663e8c7f04b53bbe44aa31d49942d'; 
    const url = `https://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${encodeURIComponent(text)}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.blob();
      })
      .then(blob => {
        const audio = new Audio(URL.createObjectURL(blob));
        audio.play();
      })
      .catch(error => {
        console.error('Error fetching text-to-speech:', error);
      });
  }
}
