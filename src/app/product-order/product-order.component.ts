import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductRowComponent } from '../product-row/product-row.component';

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
    const apiKey = '0cd349ebc1mshed072129440aa34p163847jsn829a492d8a18';
    const url = 'https://voicerss-text-to-speech.p.rapidapi.com/';

    const data = new FormData();
    data.append('src', text);
    data.append('hl', 'en-us');
    data.append('r', '0');
    data.append('c', 'mp3');
    data.append('f', '8khz_8bit_mono');

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          const audio = new Audio(URL.createObjectURL(this.response));
          audio.play();
          audio.onended = () => URL.revokeObjectURL(audio.src);
        } else {
          console.error('Error fetching text-to-speech:', this.statusText);
        }
      }
    });

    xhr.open('POST', url);
    xhr.setRequestHeader('x-rapidapi-key', apiKey);
    xhr.setRequestHeader('x-rapidapi-host', 'voicerss-text-to-speech.p.rapidapi.com');
    xhr.responseType = 'blob'; // Ensure the response is treated as binary data
    xhr.send(data);
  }
}
