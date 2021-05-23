import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor(
    public app: string = "SechikShop",
    public ver: string = '1.0') {
   }
}
