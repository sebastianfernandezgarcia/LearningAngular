import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  //templateUrl: './header.component.html',
  template: `
    <mat-toolbar color="primary">
     <span>My Store</span>
      </mat-toolbar>`,

styleUrls: ['./header.component.css']
})
export class HeaderComponent { }

