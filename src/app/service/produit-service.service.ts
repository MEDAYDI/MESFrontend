import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Produit } from '../Model/produit';
import { UserAuthServiceService } from './user-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  api:string="http://localhost:8080";

  constructor(private http:HttpClient , private auth:UserAuthServiceService) { }

  requestHeader = new HttpHeaders().set(
    'Authorization',`Bearer ${this.auth.getAccessTokn()}`)

  getOrder( ):Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.api}/produit`,{headers:this.requestHeader})
    .pipe(map(response => response));
  }


  updateOrder(order: Produit,id:number):Observable<any>{
    return this.http.put<any>(`${this.api}/produit/update/${id}`,order,{headers:this.requestHeader});
  }


}
