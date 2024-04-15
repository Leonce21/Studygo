import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { authGuard } from './guards/auth.guard';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { ProductComponent } from './product/product.component';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { PageNotFoundComponent } from './sharepage/page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminAuthGaurdLogin, AdminAuthGaurdService, BuyerAuthGaurdService, SellerAuthGaurdService, SellerBuyerAuthGuardLogin } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu/:id', component: MenupageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'my-profile', component: UserProfileComponent},

  //admin
  {
    path: '', canActivate:[AdminAuthGaurdLogin], children: [
      { path: "admin-login", component: AdminLoginComponent }
    ]
  },

  {
    path: '', canActivate:[AdminAuthGaurdService], children: [
      { path: "admin-dashboard", component: AdminDashboardComponent },
      { path: "admin/user", component: UserCrudComponent },
      { path: "admin/product", component: ProductComponent },
      { path: "admin/order", component: ProductComponent }
    ]
  },
  {
    path: '', canActivate:[SellerBuyerAuthGuardLogin], children: [
      {path: "sign-in", component: SigninSignupComponent},
      {path: "sign-up", component: SigninSignupComponent}
    ]
  },
  {
    path: '', canActivate:[SellerAuthGaurdService], children: [
      {path: "seller-dashboard", component:SellerDashboardComponent},
      {path: "seller/product", component:ProductComponent}
    ]
  },
  {
    path: '', canActivate:[BuyerAuthGaurdService], children: [
      {path: "buyer-dashboard", component:BuyerDashboardComponent},
      {path: "checkout", component:CheckoutComponent}
    ]
  },
  {
    path: "**", component:PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
