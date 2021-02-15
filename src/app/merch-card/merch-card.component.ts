import { PRODUCTS } from './../mockmerch';

import { Component, OnInit, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-merch-card',
  templateUrl: './merch-card.component.html',
  styleUrls: ['./merch-card.component.css']
})
export class MerchCardComponent implements OnInit {
  private renderer: Renderer2;
  products = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
