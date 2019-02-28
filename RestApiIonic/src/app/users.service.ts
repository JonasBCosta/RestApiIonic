import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private API_URL = 'https://regres.in/api/'
  constructor(public http: Http) { }

  createAccount(email: string, password: string) {
    return new Promise((resolve, reject) => {
       var data = {
         email: email,
         password: password
       };

       this.http.post(this.API_URL + 'register', data)
         .subscribe((result: any) => {
            resolve(result.json())
         },
         (error) => {
            reject(error.json());
         })

    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
       var data = {
         email: email,
         password: password
       };

       this.http.post(this.API_URL + 'login', data)
         .subscribe((result: any) => {
            resolve(result.json())
         },
         (error) => {
            reject(error.json());
         })

    });
  }

  createAccount(email: string, password: string) {
    return new Promise((resolve, reject) => {
       var data = {
         email: email,
         password: password
       };

       this.http.post(this.API_URL + 'register', data)
         .subscribe((result: any) => {
            resolve(result.json())
         },
         (error) => {
            reject(error.json());
         })

    });
  }
}
