// import { PRODUCTS } from './../mockmerch';
import { Product } from './../merch';
import { ProductService } from './../product.service';




import { Component, Injectable, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-merch-details',
  templateUrl: './merch-details.component.html',
  styleUrls: ['./merch-details.component.css']
})
export class MerchDetailsComponent implements OnInit {
  private renderer: Renderer2;
  // products = PRODUCTS;
  errorMessage = '';
  product: Product | undefined;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
