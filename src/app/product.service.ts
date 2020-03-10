import {Injectable} from '@angular/core';
import {PRODUCTS, CAR_ITEMS} from './mock-products';
import {Product} from './product';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  create(product: Product) {
    product.id = PRODUCTS.length + 1;
    product.createdAt = new Date();
    product.image = product.image ? product.image : `https://picsum.photos/id/${product.id}/300/300`;

    PRODUCTS.push(product);

    return of(product).pipe(delay(500));
  }

  list(): Observable<Product[]> {
    return of(PRODUCTS).pipe(delay(500));
  }

  addToCar(product: Product): Observable<void> {
    CAR_ITEMS.push(product);

    console.log('item added to car', product);

    return of(null).pipe(delay(500));
  }

  listCarItems(): Observable<Product[]> {
    return of([...CAR_ITEMS]).pipe(delay(500));
  }

  removeFromCar(product: Product) {
    const id = CAR_ITEMS.findIndex(value => value.id === product.id);
    CAR_ITEMS.splice(id, 1);

    console.log('item removed to car', product);

    return of(null).pipe(delay(500));
  }
}
