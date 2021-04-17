import { CartService } from './../../../cart/services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;
  constructor(private cartService: CartService) {
    this.product = new ProductModel();
  }

  ngOnInit(): void {
  }

  onBuy(): void {
    this.cartService.add();
  }
}
