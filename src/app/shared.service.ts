import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44343/api";

  constructor(private http:HttpClient) { }

  getCustList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/Customers');
  }

  addCustomer(val:any) {
    return this.http.post(this.APIUrl+'/Customers', val);
  }

  updateCustomer(val:any){
    return this.http.put(this.APIUrl+'/Customers', val);
  }

  deleteCustomer(val:any) {
    return this.http.delete(this.APIUrl+'/Customers/'+val);
  }

}
