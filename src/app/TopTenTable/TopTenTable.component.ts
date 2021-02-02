import { Beer } from '../beer';
import { BEERS } from '../mockbeers';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-TopTenTable',
  templateUrl: './TopTenTable.component.html',
  styleUrls: ['./TopTenTable.component.css'],
})
export class TopTenTable {
  beers = BEERS;
  sortedData = this.beers;

  constructor() {
    this.sortedData = this.beers.slice(0, 10);
  }

  sortData(sort: Sort) {
    const data = this.beers.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'desc';
      switch (sort.active) {
        case 'rating':
          return compare(a.rating, b.rating, isAsc);

        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
