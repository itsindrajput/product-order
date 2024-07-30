import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-product-row',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {
  products = ['Pencil', 'Eraser', 'Pen'];
  quantities = [1, 2, 3, 4, 5];

  selectedProduct: string = '';
  selectedQuantity: number | null = null;

  @Output() productAdded = new EventEmitter<{ product: string, quantity: number }>();

  onProductChange() {
    if (this.selectedProduct && this.selectedQuantity === null) {
      this.selectedQuantity = this.quantities[0];
    }
  }

  addProduct() {
    if (this.selectedProduct && this.selectedQuantity !== null) {
      const newProduct = { product: this.selectedProduct, quantity: this.selectedQuantity };
      this.productAdded.emit(newProduct);
      this.resetSelection();
    }
  }

  private resetSelection() {
    this.selectedProduct = '';
    this.selectedQuantity = null;
  }
}
