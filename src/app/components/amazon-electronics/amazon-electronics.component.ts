import { Component } from '@angular/core';
import { AmazonProductsService } from '../../services/amazon-products.service';
import { ProductDetails } from '../../contract/product-details.service';

@Component({
  selector: 'app-amazon-electronics',
  templateUrl: './amazon-electronics.component.html',
  styleUrls: ['./amazon-electronics.component.css']
})
export class AmazonElectronicsComponent {
  public electronicsProducts:ProductDetails[] = [];
  constructor(private _serv:AmazonProductsService) {}
  ngOnInit() {
    this._serv
      .GetProductByCategoryName('electronics')
      .subscribe(data =>{ this.electronicsProducts = data});
  }
}
