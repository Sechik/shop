import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts(): ProductModel[] {
    let array: ProductModel[] = [];
    array.push(new ProductModel());
    array.push(new ProductModel());
    array.push(new ProductModel());
    return array;
  }
}
export class ProductModel {
  public name: string;
  public description: string
  public price: number;
  public isAvailable: boolean
  public status: Status;

  public constructor() {
    this.name = "Name";
    this.description = "Description";
    this.price = 1.0;
    this.isAvailable = false;
    this.status = Status.OnSale;
  }

}

export enum Status {
  OnSale,
  OnDiscount
}
