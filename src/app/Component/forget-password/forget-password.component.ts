import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgretPasswordRequest } from 'src/app/Model/forgret-password-request';
import { ForgetPasswordServiceService } from 'src/app/service/forget-password-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  sendemail:boolean=false;
  request={
    username:''
  }

  constructor( private forgetPassword:ForgetPasswordServiceService , private route:Router ) { }

  ngOnInit(): void {
  }

  public findUserName(){
     this.forgetPassword.findUserName(this.request).subscribe(
      (res:ForgretPasswordRequest)=>{
        this.sendemail=true;
        localStorage.setItem('resetPasswordToken',res.token);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
        this.sendemail=false;
      }
     );
  }

}
