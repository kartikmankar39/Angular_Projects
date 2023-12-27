import { Component } from '@angular/core';
import { ProductDetails } from '../../contract/product-details.service';
import { ActivatedRoute } from '@angular/router';
import { AmazonProductsService } from '../../services/amazon-products.service';

@Component({
  selector: 'app-amazon-more-details',
  templateUrl: './amazon-more-details.component.html',
  styleUrls: ['./amazon-more-details.component.css'],
})
export class AmazonMoreDetailsComponent {
  public product: ProductDetails = {
    id: 0,
    category: '',
    description: '',
    title: '',
    price: 0,
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };
  public id: any = '';
  constructor(
    private _route: ActivatedRoute,
    private _serv: AmazonProductsService
  ) {}
  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('productId');
    this._serv
      .GetProductById(this.id)
      .subscribe((data) => (this.product = data));
  }
}
