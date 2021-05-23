import { CartService } from './../../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[] = [];
  sortByAscending: boolean = true;
  sortByProperties: string[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  sortByAscendingChanged(value: boolean) {
    this.sortByAscending = value;
    console.log("!!!");
  }

  sortByPropertiesChanged(properties: string[]) {
    this.sortByProperties = properties;
  }

  onAddToCart(product: ProductModel): void{
    const transformedProduct = {...product, quantity: 1};
    this.cartService.addProduct(transformedProduct);
  }

}
