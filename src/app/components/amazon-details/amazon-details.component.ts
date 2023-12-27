import { Component } from '@angular/core';
import { ProductDetails } from '../../contract/product-details.service';
import { ActivatedRoute } from '@angular/router';
import { AmazonProductsService } from '../../services/amazon-products.service';

@Component({
  selector: 'app-amazon-details',
  templateUrl: './amazon-details.component.html',
  styleUrls: ['./amazon-details.component.css']
})
export class AmazonDetailsComponent {
  public product: ProductDetails = {
    id: 0,
    category: '',
    description: '',
    image: '',
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
    title: '',
  };
  public id: any = '';
  constructor(
    private _route: ActivatedRoute,
    private _serv: AmazonProductsService
  ) {}
  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this._serv.GetProductById(this.id).subscribe(data => this.product = data);
  }
}
