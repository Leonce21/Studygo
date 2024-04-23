import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.scss']
})
export class BuyerDashboardComponent implements OnInit{

  all_products: any;
  show_checkout: boolean = false;

  constructor(
    private router:Router,
    private customerService: CustomerService,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.customerService.allProduct().subscribe(data => {
      this.all_products = data
    }, error=>{
      console.log("My error", error)
    })
  }

  buyProduct(id:number){
    this.show_checkout = true;
    this.customerService.quickBuyProduct(id);
    this.router.navigateByUrl('/checkout');
  }

  addtoCart(){
    // alert("Coming soon");
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Coming soon' });
  }

}
