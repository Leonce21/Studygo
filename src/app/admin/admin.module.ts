import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserCrudComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
