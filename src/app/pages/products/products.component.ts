import { Component, OnInit } from '@angular/core';
import {ProductService} from "./services/product.service";
import {tap} from "rxjs/operators";
import {Product} from "./interfaces/product.interface";
import {products} from "../../products";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Product[];


  constructor(private productSvc: ProductService, private shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
      .pipe(
        tap((products: Product[]) => this.products = products)
      )
      .subscribe();
  }

  addToCart(product:Product): void{
    console.log('AddToCart', product);
    this.shoppingCartSvc.updateCart(product);
  }
}
