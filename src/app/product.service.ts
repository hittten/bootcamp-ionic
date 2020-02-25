import { Injectable } from '@angular/core';
import { PRODUCTS, CAR_ITEMS } from './mock-products';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  list(): Product[] {
    return PRODUCTS;
  }

  addToCar(product: Product): Product {
    CAR_ITEMS.push(product);

    console.log('item added to car', product);

    return product;
  }

  listCarItems(): Product[] {
    return CAR_ITEMS;
  }

  removeFromCar(product: Product) {
    const id = CAR_ITEMS.findIndex(value => value.id === product.id);
    CAR_ITEMS.splice(id, 1);

    console.log('item removed to car', product);

    return product;
  }
}
