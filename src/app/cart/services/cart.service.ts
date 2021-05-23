import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ProductModel } from 'src/app/product/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: ProductModel[] = [];

  public get isEmptyCart() : boolean {
    return this.cartProducts.length === 0;
  }

  addProduct(product: ProductModel, quantity: number = 1): void {
    this.cartProducts.push({...product, quantity: quantity });
  }

  totalQuantity(): number {
    return this.cartProducts.length;
  }

  totalSum(): number {
    let result = 0;
    this.cartProducts.forEach(x => result += x.price);
    return result;
  }

  getProduct(): Observable<ProductModel[]> {
    return of(this.cartProducts);
  }

  increaseQuantity(): void {

  }
  decreaseQuantity(): void {

  }

  private changeQuantity(product: ProductModel, quantity: number) {
    //dunno how to write that
  }

  updateCartData(): void {
    //dunno what to write
  }

  removeAllProducts(): void {
    this.cartProducts = [];
  }
}
