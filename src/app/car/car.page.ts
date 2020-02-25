import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  products = this.productService.listCarItems();
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  removeFromCar(product) {
    this.productService.removeFromCar(product);
  }
}
