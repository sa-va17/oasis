import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // country() {
  //   return [
  //   {
  //     id:1,
  //     name: "Australia"
  //   },
  //   {
  //     id:2,
  //     name:"Canada"
  //   },
  //   {
  //     id:3,
  //     name:"USA"
  //   },
  //   {
  //     id:4,
  //     name:"India"
  //   }
  
  // ]
  // }

  // places() {
  //   return[
  //     {
  //       id:1,
  //       name:"Sydney"
  //     },
  //     {
  //       id: 1,
  //       name: "Melbourne"
  //     },
  //     {
  //       id: 2, 
  //       name: "Ontario"
  //     },
  //     {
  //       id:2,
  //       name:"Vancouver"
  //     },
  //     {
  //       id:3,
  //       name:"Chicago"
  //     },
  //     {
  //       id:3,
  //       name:"New York"
  //     },
  //     {
  //       id:4,
  //       name: "Kolkata"
  //     },
  //     {
  //       id:4,
  //       name:"Guwhati"
  //     }

  //   ]
  // }

}
