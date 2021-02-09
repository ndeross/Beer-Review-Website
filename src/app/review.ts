import { Type } from '@angular/core';
import { BeerType } from './BeerTypes';

export interface Review {
  imgTag: string;
  beerName: string;
  content: string;
  rating: number;
  date: string;
}
