import { Component } from '@angular/core';
import { AmazonProductsService } from '../../services/amazon-products.service';
import { ProductDetails } from '../../contract/product-details.service';
@Component({
  selector: 'app-amazon-home',
  templateUrl: './amazon-home.component.html',
  styleUrls: ['./amazon-home.component.css'],
})
export class AmazonHomeComponent {

  public products: ProductDetails[] = [];
  constructor(private _serv:AmazonProductsService) {}
  ngOnInit(){
    this._serv.GetProducts().subscribe(data=>{
      this.products = data;
    })
  }
}
