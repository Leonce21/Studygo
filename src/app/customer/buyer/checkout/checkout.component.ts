import { Component, OnInit } from '@angular/core';
import { Order, Product, User } from 'src/app/core/model/object-model';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{

  single_product_id: any;
  user_id:any;
  individual_product!:Product;
  user_detail!:User;
  user_address:any;
  user_contact_no:any;
  order_dto!:Order;

  constructor(
    private customerService:CustomerService,
    private router:Router,
    private messageService: MessageService,
  ){}

  ngOnInit(): void {
    this.customerService.currentProduct.subscribe(product=>this.single_product_id = product);
    this.user_id = Number(sessionStorage.getItem('user_session_id'));
    this.productDetail(this.single_product_id);
  }

  productDetail(single_product_id:any){
    this.customerService.individualProduct(single_product_id).subscribe(data=> {
      this.individual_product = data;
      console.warn("my single product", this.individual_product)
    }, error=>{
      console.log("My error", error)
    })
  }

  placeOrder(){
    this.order_dto = {
      id:0,
      userId:this.user_id,
      sellerId:2,
      product:{
        id:this.individual_product.id,
        productname:this.individual_product.productname,
        uploadPhoto:this.individual_product.uploadPhoto,
        productdesc:this.individual_product.productdesc,
        status:this.individual_product.status
      },
      dateTime: new Date().toLocaleDateString()
    }
    console.log("place order dtl", this.order_dto);
    this.customerService.insertNewOrder(this.order_dto).subscribe(data=>{
      // alert("You ordered a product");
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You ordered a product' });
      this.router.navigateByUrl('/buyer-dashboard')
    },error=>{
      console.log("error in your ordered a product", error)
    })
  }


}
