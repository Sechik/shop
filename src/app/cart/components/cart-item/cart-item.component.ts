import { ProductModel } from './../../../product/services/product.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() product!: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }

}
