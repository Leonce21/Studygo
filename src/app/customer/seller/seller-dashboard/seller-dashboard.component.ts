import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit{

  order_Dashboard_data:any;
  total_order:any;
  last_order_date:any;
  product_dashboard_data:any;
  total_product:number = 0;
  publish_product:number = 0;
  inactive_product:number = 0;
  draft_product:number = 0;

  constructor(
    private customerService: CustomerService, 
    private router:Router
  ){}

  ngOnInit(): void {
    this.sellerOrderDashboardData();
    this.sellerProductDashboardData();
  }

  sellerProductDashboard(){
    this.router.navigateByUrl('/seller/product');
  }

  sellerOrderDashboard(){
    alert("not available now");
  }

  sellerOrderDashboardData(){
    this.customerService.orderDashboardData().subscribe(data=>{
      this.order_Dashboard_data = data;
      console.log("Order Dashboard data", this.order_Dashboard_data);
      this.total_order = Number(this.order_Dashboard_data.length);
      this.last_order_date = this.order_Dashboard_data[this.total_order - 1].datetime;
    }, error => {
      console.log("My error data", error);
    })
  }

  sellerProductDashboardData(){
    this.customerService.productDashboardData().subscribe(data => {
      this.product_dashboard_data = data;
      for(status in this.product_dashboard_data){
        if(this.product_dashboard_data[status].status == 'publish'){
          ++this.publish_product;
        }else if(this.product_dashboard_data[status].status == 'inactive'){
          ++this.inactive_product;
        }else if(this.product_dashboard_data[status].status == 'draft'){
          ++this.draft_product;
        }
        ++this.total_product
      }
    }, error => {
      console.log("My error data", error);
    })
  }
  
}
