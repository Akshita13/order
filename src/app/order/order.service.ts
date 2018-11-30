import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';

@Injectable()
export class OrderService {

  private url="http://localhost:3000/Order";
  constructor(private http:HttpClient) { }

  public getOrders():Observable<Order[]>
  {
    return this.http.get<Order[]>(this.url);
  }

  public getOrder(id:number):Observable<Order[]>
  {
    return this.http.get<Order[]>(this.url+"/"+id);
  }

  public deleteOrder(id:number):Observable<Order[]>
  {
    return this.http.delete<Order[]>(this.url+"/"+id);
  }

  public addOrders(order):Observable<Order[]>
  {
    return this.http.post<Order[]>(this.url,order);
  }

  public updateOrder(order):Observable<Order[]>
  {
    return this.http.put<Order[]>(this.url,order);
  }

}
