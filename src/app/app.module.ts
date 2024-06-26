import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PageNotFoundComponent } from './sharepage/page-not-found/page-not-found.component';
import { provideRouter } from '@angular/router';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component'; 
import { BuyerDashboardComponent } from './customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
;




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    UserProfileComponent,
    PageNotFoundComponent,
    SigninSignupComponent,
    AdminLoginComponent,
    UserCrudComponent,
    UserProfileComponent,
    BuyerDashboardComponent,
    CheckoutComponent,
    SellerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [MessageService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
