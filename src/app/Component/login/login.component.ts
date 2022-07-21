import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserAuthServiceService } from 'src/app/service/user-auth-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidUser:boolean=false;
  credenatials={
    username:'',
    password:''
  }
  user:User=new User();

  constructor(private userService:UserServiceService ,
    private auth:UserAuthServiceService,
    private router:Router
    ) { }

  ngOnInit(): void {

  }

  public signupmode():void{
    const cont  = document.querySelector(".cont");
       cont?.classList.add("sign-up-mode");
   }


   public signinmode():void{
    const cont  = document.querySelector(".cont");
    cont?.classList.remove("sign-up-mode");
   }

   public userRegister():void{
         this.userService.userRegister(this.user)
         .subscribe(
          (res:User)=>{
            alert("check your Inbox to activate your account");
            this.signinmode();

          },
          (error:HttpErrorResponse)=>{
            alert(error.error);
          }
        );
   }

   userLogIn():void{

          this.userService.doLogin(this.credenatials).subscribe(
            (res)=>{
              this.invalidUser=false ;
              this.auth.setToken(res.access_token,res.refrech_token);
              this.auth.setRoles(res.role);
              this.router.navigate([``]);
            },
            error => {

               this.invalidUser=true ;
            },

          )
   }

}
