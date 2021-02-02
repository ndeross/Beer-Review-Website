import { Component, OnInit } from '@angular/core';
import { Beer } from './../beer';
import { BEERS } from './../mockbeers';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit {
  beers = BEERS;
  selectedBeer: Beer;

  constructor() {}

  ngOnInit() {}

  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }
}
