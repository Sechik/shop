import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  app = 'SechikShop';
  ver = '1.0';
  // constructor(
  //   public app: string = 'SechikShop',
  //   public ver: string = '1.0') {
  //  }
}
//  Тут не надо было создавать класс, так как ангуляр будет искать провайдер в виде строки
