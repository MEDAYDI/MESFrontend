import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Model/produit';
import { ProduitServiceService } from 'src/app/service/produit-service.service';
import { UserAuthServiceService } from 'src/app/service/user-auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produit:Produit=new Produit();
  produits!:Produit[];
  i!:number;
  editProduit:any={};
  deleteProduitId!:number;
  editProduitId!:number;




  constructor(private produitService:ProduitServiceService , private auth:UserAuthServiceService,private route:Router ) { }

  ngOnInit(): void {
    if(this.auth.isLogeedIn()){
      this.getallproduit();

    }else{
      this.route.navigate(['login']);
    }

  }


  public getallproduit():void{
    this.produitService.getOrder().subscribe(
      (response:Produit[])=>{
       this.produits=response;
      },
      (error:HttpErrorResponse)=>{
        console.log(error.message);

      }
    )
  }



  public logout(){
    this.auth.clean();
    this.route.navigate(['login']);
  }

  public searchOf(key:string):void {

    const result:Produit[]=[];
    for(const order of this.produits){
      if (order.of.indexOf(key) !==-1) {
        result.push(order);

      }
    }
    this.produits=result;
    if (result.length=== 0 || !key) {
      this.getallproduit();

    }

  }

  public searchClient(key:string):void {

    const result:Produit[]=[];
    for(const order of this.produits){
      if (order.client.toLowerCase().indexOf(key.toLowerCase()) !==-1) {
        result.push(order);

      }
    }
    this.produits=result;
    if (result.length=== 0 || !key) {
      this.getallproduit();

    }

  }
  public searchLot(key:string):void {

    const result:Produit[]=[];
    for(const order of this.produits){
      if (order.lot.indexOf(key) !==-1) {
        result.push(order);

      }
    }
    this.produits=result;
    if (result.length=== 0 || !key) {
      this.getallproduit();

    }

  }




  editproduit():void{

    this.produitService.updateOrder(this.editProduit,this.editProduitId)
    .subscribe(
      (res:Produit)=>{
        this.getallproduit();
      },
     (error:HttpErrorResponse)=>{
          alert(error.message);

    })

  }





}
