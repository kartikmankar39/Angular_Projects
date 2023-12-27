import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  isLoggedIn = false;
  constructor() {}
  isAutecticated(uname: string, pwd: string) {
    if (uname == 'admin' && pwd == 'admin') {
      this.isLoggedIn = true;
      return this.isLoggedIn;
    }
    return this.isLoggedIn;
  }
}
