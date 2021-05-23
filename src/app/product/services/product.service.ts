import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor() { }

  public getProducts(): ProductModel[] {
    const array: ProductModel[] = [];
    array.push(new ProductModel(
      'Product 1', 'Description for product 1', 10.0, true, Discount.No
    ));
    array.push(new ProductModel(
      'Product 2', 'Description for product 2', 5.0, true, Discount.No
    ));
    array.push(new ProductModel(
      'Product 3', 'Description for product 3', 20.0, true, Discount.No
    ));
    return array;
  }
}
export class ProductModel {
  constructor(
    public name: string = 'Name',
    public description: string = 'Description',
    public price: number = 0.0,
    public isAvailable: boolean = false,
    public status: Discount = Discount.No,
    public quantity = 1
  ) {}
}

export enum Discount {
  No,
  Five,
  Ten
}
