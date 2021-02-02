import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BEERS } from '../mockbeers';

@Component({
  selector: 'app-TopTenTable',
  templateUrl: './TopTenTable.component.html',
  styleUrls: ['./TopTenTable.component.css'],
})
export class TopTenTable implements OnInit {
  beers = BEERS;
  selectedBeer: Beer;

  constructor() {}

  ngOnInit() {}

  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }
}
