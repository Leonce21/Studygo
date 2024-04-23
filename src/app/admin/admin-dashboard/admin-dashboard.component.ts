import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit{

  user_dashboard_data: any;
  total_user: number = 0;
  admin_user:number = 0;
  seller_user: number = 0;
  buyer_user:number = 0;

  product_dashboard_data: any;
  total_product: number = 0;
  publish_product:number = 0;
  inactive_product: number = 0;
  draft_product:number = 0;

  constructor(
    private router:Router, 
    private adminService: AdminService
  ){}

  ngOnInit(): void {
    this.adminProductDashBoard();
    this.adminUserDashBoardData();
  }

  userDashBoard(){
    this.router.navigateByUrl("/admin/user")
  }

  productDashBoard(){
    this.router.navigateByUrl("/admin/product")
  }

  adminUserDashBoardData(){
    this.adminService.userDashboardData().subscribe(data => {
      this.user_dashboard_data = data;
      for(let user in this.user_dashboard_data){
        if(this.user_dashboard_data[user].role == 'admin'){
          ++this.admin_user;
        }else if(this.user_dashboard_data[user].role == 'seller'){
          ++this.seller_user;
        }else if(this.user_dashboard_data[user].role == 'buyer'){
          ++this.buyer_user;
        }
        ++this.total_user;
      }
    }, error =>{
      console.log("My error",error)
    })
  }

  adminProductDashBoard(){
    this.adminService.productDashboardData().subscribe(data => {
      this.product_dashboard_data = data;
      for(let status in this.product_dashboard_data){
        if(this.product_dashboard_data[status].status == 'publish'){
          ++this.publish_product;
        }else if(this.product_dashboard_data[status].status == 'inactive'){
          ++this.inactive_product;
        }else if(this.product_dashboard_data[status].status == 'draft'){
          ++this.draft_product;
        }
        ++this.total_product;
      }
    }, error =>{
      console.log("My error",error)
    })
  }

}
