import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ComponentsModule { }
