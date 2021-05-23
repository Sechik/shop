import { CartService } from './../../../cart/services/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: ProductModel;
  @Output() addToCart = new EventEmitter<ProductModel>();

  constructor() {
  }

  ngOnInit(): void {

  }

  onAddToCart(product: ProductModel): void {
    this.addToCart.emit(product);
  }
}
