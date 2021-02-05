import { MERCH } from './../mockmerch';

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
  merch = MERCH;

  constructor() { }

  ngOnInit(): void {
  }

}
