import { Injectable } from '@angular/core';
import { PRODUCTS, CAR_ITEMS } from './mock-products';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  create(product: Product) {
    product.id = PRODUCTS.length + 1;
    product.createdAt = new Date();
    product.image = `https://picsum.photos/id/${product.id}/300/300`;

    PRODUCTS.push(product);

    return product;
  }

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
