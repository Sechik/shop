import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor() { }

  public getProducts(): ProductModel[] {
    const array: ProductModel[] = [];
    array.push(new ProductModel());
    array.push(new ProductModel());
    array.push(new ProductModel());
    return array;
  }
}
export class ProductModel {
  constructor(
    public name: string = 'Name',
    public description: string = 'Description',
    public price: number = 1.0,
    public isAvailable: boolean = false,
    public status: Status = Status.OnSale,
  ) {}

  // public constructor() {
  //   this.name = "Name";
  //   this.description = "Description";
  //   this.price = 1.0;
  //   this.isAvailable = false;
  //   this.status = Status.OnSale;
  // }

}

export enum Status {
  OnSale,
  OnDiscount,
}
