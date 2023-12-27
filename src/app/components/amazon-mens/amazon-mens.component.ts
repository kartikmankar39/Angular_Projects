import { Component } from '@angular/core';
import { ProductDetails } from '../../contract/product-details.service';
import { AmazonProductsService } from '../../services/amazon-products.service';

@Component({
  selector: 'app-amazon-mens',
  templateUrl: './amazon-mens.component.html',
  styleUrls: ['./amazon-mens.component.css']
})
export class AmazonMensComponent {
  public mensProducts:ProductDetails[] = [];
  constructor(private _serv:AmazonProductsService) {}
  ngOnInit() {
    this._serv
      .GetProductByCategoryName('mens')
      .subscribe(data =>{ this.mensProducts = data});
  }
}
