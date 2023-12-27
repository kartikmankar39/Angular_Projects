import { Component } from '@angular/core';
import { ProductDetails } from '../../contract/product-details.service';
import { AmazonProductsService } from '../../services/amazon-products.service';

@Component({
  selector: 'app-amazon-womens',
  templateUrl: './amazon-womens.component.html',
  styleUrls: ['./amazon-womens.component.css']
})
export class AmazonWomensComponent {
  public womensProducts:ProductDetails[] = [];
  constructor(private _serv:AmazonProductsService) {}
  ngOnInit() {
    this._serv
      .GetProductByCategoryName('womens')
      .subscribe(data =>{ this.womensProducts = data});
  }
}
