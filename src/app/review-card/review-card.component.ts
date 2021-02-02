import { REVIEWS } from './../mockreviews';
import {
  Component,
  OnInit,
  Injectable,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css'],
})
export class ReviewCardComponent {
  private renderer: Renderer2;
  reviews = REVIEWS;

  constructor() {}

  ngOnInit(): void {}
}
