import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';


// admin before login check
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdLogin implements CanActivate {

  constructor(
    private router:Router,
    private messageService: MessageService
  ){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let role = sessionStorage.getItem("role");
    if(role == "admin"){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Welcome Admin' });
      this.router.navigate(["/admin-dashboard"]);
      return false;
    }else{
      return true;
    }
  }
}

// admin after login check
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService{

  constructor(
    private router:Router,
    private messageService: MessageService
  ){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let role = sessionStorage.getItem("role");
    if(role == "admin"){
      return true;
    }else{ 
      this.router.navigate(["/admin-login"]);
      return false;
    }
  }
}

// customer (buyer & seller) before login check
@Injectable({
  providedIn: 'root'
})
export class SellerBuyerAuthGuardLogin implements CanActivate{

  constructor(
    private router:Router,
    private messageService: MessageService
  ){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let role = sessionStorage.getItem("role");
    if(role == "seller"){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Welcome Seller' });
      this.router.navigate(["/seller-dashboard"]);
      return false;
    }else if(role == "buyer"){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Welcome buyer' });
      this.router.navigate(["/buyer-dashboard"]);
      return false;
    }else{ 
      return true;
    }
  }
}

// buyser after login check
@Injectable({
  providedIn: 'root'
})
export class BuyerAuthGaurdService{

  constructor(
    private router:Router,
    private messageService: MessageService
  ){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let role = sessionStorage.getItem("role");
    if(role == "buyer"){
      return true;
    }else{ 
      this.router.navigate(["/sign-in"]);
      return false;
    }
  }
}

// seller after login check
@Injectable({
  providedIn: 'root'
})
export class SellerAuthGaurdService{

  constructor(
    private router:Router,
    private messageService: MessageService
  ){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let role = sessionStorage.getItem("role");
    if(role == "seller"){
      return true;
    }else{ 
      this.router.navigate(["/sign-in"]);
      return false;
    }
  }
}
