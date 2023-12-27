import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth.service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardsService implements CanActivate {
constructor(private authService:AuthServiceService,private router:Router){};
  canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot
  ):boolean{
    console.log('CanActivate called');
    let isLoggedIn=this.authService.isAutecticated("","");
    if(isLoggedIn){
      return true;
    }else{
      this.router.navigate(['/login']);
    }
   return false;
  }
}
