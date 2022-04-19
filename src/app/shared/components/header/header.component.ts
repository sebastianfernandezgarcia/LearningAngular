import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-header',
  //templateUrl: './header.component.html',
  template: `
    <mat-toolbar color="primary">
     <span>My Store</span>
      {{quantity$|async|json}} - Quantity
      </mat-toolbar>`,

styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  quantity$ = this.shoppingCartSvc.quantityAction$;
  total$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;
  constructor(private shoppingCartSvc: ShoppingCartService){ }
}

