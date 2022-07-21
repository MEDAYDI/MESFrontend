import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgretPasswordRequest } from '../Model/forgret-password-request';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordServiceService {

  api:string="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public findUserName(username:any):Observable<ForgretPasswordRequest>{

    return this.http.post<ForgretPasswordRequest>(`${this.api}/api/resetpassword`,username);

  }

  public changePassword(request:any):Observable<any>{
    return this.http.post<any>(`${this.api}/api/resetpassword/confirm`,request);
  }

}
