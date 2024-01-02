import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:any = "http://localhost:8093/products";

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(this.baseUrl+"/all");
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get(`${this.baseUrl+"product/"}/${productId}`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(this.baseUrl+"/add", product);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put(this.baseUrl+"/update", product);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }


}
