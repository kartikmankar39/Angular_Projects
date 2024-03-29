import { Component } from '@angular/core';
import { ProductDetails } from '../../contract/product-details.service';
import { AmazonProductsService } from '../../services/amazon-products.service';
@Component({
  selector: 'app-amazon-jewelery',
  templateUrl: './amazon-jewelery.component.html',
  styleUrls: ['./amazon-jewelery.component.css'],
})
export class AmazonJeweleryComponent {
  public jeweleryProducts:ProductDetails[] = [];
  constructor(private _serv:AmazonProductsService) {}
  ngOnInit() {
    this._serv
      .GetProductByCategoryName('jewelery')
      .subscribe(data =>{ this.jeweleryProducts = data});
  }
}
