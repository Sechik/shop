import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/product/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: ProductModel[] = [];

  add(): void {
    this.cartProducts.push(new ProductModel());
  }
}
