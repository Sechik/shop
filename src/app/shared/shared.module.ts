import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { OrderByPipe } from './pipes/order-by.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
