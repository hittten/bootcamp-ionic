import {Component} from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products$ = this.productService.list();

  constructor(private productService: ProductService) {
  }

  addToCar(product) {
    this.productService.addToCar(product)
      .subscribe(() => console.log('product was added to car'));
  }
}
