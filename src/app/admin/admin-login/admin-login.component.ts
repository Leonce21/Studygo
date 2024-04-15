import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginSignupService } from 'src/app/services/login-signup.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  signInFormValue: any = {};
  user_data: any

  constructor(
    private router: Router,
    private loginService: LoginSignupService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
   
  }

  onSubmitSignIn() {
    this.loginService.adminLogin(this.signInFormValue.userEmail, this.signInFormValue.userPassword).subscribe(data => {
      this.user_data = data;
      if(this.user_data.length == 1){
        sessionStorage.setItem("user_session_id", this.user_data[0].id);
        sessionStorage.setItem("role", this.user_data[0].role);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successfully' });
        this.router.navigateByUrl('/admin-dashboard');
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid' });
      }
      console.log(this.user_data)
    },error=>{
      console.log("My error", error)
    })
       
  }

  // get userEmail(){
  //   return this.signInForm.controls['userEmail'];
  // }r
  // get userPassword(){
  //   return this.signInFrom.controls['userPassword'];
  // }

}
