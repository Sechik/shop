import { CartService } from './../../../cart/services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: ProductModel;

  // не надо внедрять зависимость в этот компонент
  // используйте аутпут
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.product = new ProductModel();
  }

  onBuy(): void {
    this.cartService.add();
  }
}
