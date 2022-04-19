import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../interfaces/product.interface";
import {getSortHeaderNotContainedWithinSortError} from "@angular/material/sort/sort-errors";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    console.log('Click', this.product);
    this.addToCartClick.emit(this.product);
  }
}
