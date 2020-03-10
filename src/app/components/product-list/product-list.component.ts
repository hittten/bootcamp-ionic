import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products$: Observable<Product[]>;
  @Input() buttonText: string;
  @Output() buttonClick = new EventEmitter<Product>();
  gridView = false;

  constructor() {
  }

  ngOnInit() {
  }

  enableGridView(value: boolean) {
    this.gridView = value;
  }
}
