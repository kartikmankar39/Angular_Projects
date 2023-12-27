import { Component } from '@angular/core';
import { AuthServiceService } from '../../auth/auth.service.service';

@Component({
  selector: 'app-amazon-login',
  templateUrl: './amazon-login.component.html',
  styleUrls: ['./amazon-login.component.css']
})
export class AmazonLoginComponent {
  public username:string='';
  public password:string='';
  constructor(private serv:AuthServiceService){}
  CheckLogin(){
    this.serv.isAutecticated(this.username,this.password);
  }
}
