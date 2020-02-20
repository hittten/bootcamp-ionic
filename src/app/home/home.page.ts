import { Component } from '@angular/core';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products = PRODUCTS;

  constructor() { }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      this.products = [...this.products, ...PRODUCTS];

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.products.length >= 50) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
