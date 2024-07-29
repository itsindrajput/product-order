import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-product-row',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include CommonModule and FormsModule
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {
  products = ['Pencil', 'Eraser', 'Pen'];
  quantities = [0, 1, 2, 3, 4, 5];

  selectedProduct: string = '';
  selectedQuantity: number | null = null;

  @Output() productAdded = new EventEmitter<{ product: string, quantity: number }>();

  onProductChange() {
    // This is optional, based on your requirements.
    if (this.selectedProduct && this.selectedQuantity === null) {
      this.selectedQuantity = 0; // Or handle as needed
    }
  }

  addProduct() {
    if (this.selectedProduct && this.selectedQuantity !== null) {
      this.productAdded.emit({ product: this.selectedProduct, quantity: this.selectedQuantity });
      this.selectedProduct = '';
      this.selectedQuantity = null;
    }
  }
}
