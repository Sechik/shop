import { CartService } from './cart/services/cart.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle') title!: ElementRef<HTMLHeadingElement>;

  constructor(public cartService: CartService) {
  }

  ngAfterViewInit(): void {
   this.title.nativeElement.textContent = 'Магазин "Найдется ВСЁ!"';
  }
}
