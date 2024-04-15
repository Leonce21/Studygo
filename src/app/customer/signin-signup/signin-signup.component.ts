import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/core/model/object-model';
import { AuthService } from 'src/app/services/auth.service';
import { LoginSignupService } from 'src/app/services/login-signup.service';
import { passwordMatchValidator } from 'src/app/shared/password.match.directice';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.scss']
})
export class SigninSignupComponent{

  regForm: boolean = false;
  signUpFrom!: FormGroup;
  signInFrom!: FormGroup;
  signUpsubmitted = false;
  href: string = '';
  user_data: any;
  user_dto!: User;
  user_reg_data: any;
  signInFromValue: any = {};

  constructor(
    private router: Router,
    private loginService: LoginSignupService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(){
    this.href = this.router.url;
    if (this.href == '/sign-up') {
      this.regForm = true;
    } else if (this.href = '/sign-in') {
      this.regForm = false;
    }

    this.signUpFrom = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email: ['', Validators.required, Validators.email],
      language: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: passwordMatchValidator
    });

    this.signInFrom = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', Validators.required]
    })
  }

  get name() {
    return this.signUpFrom.controls['name'];
  }

  get email() {
    return this.signUpFrom.controls['email'];
  }
  get password() {
    return this.signUpFrom.controls['password'];
  }
  get confirmPassword() {
    return this.signUpFrom.controls['confirmPassword'];
  }

  get rf() {
    return this.signUpFrom.controls;
  }

  onSubmitSignUp() {
    this.signUpsubmitted = true;
    if (this.signUpFrom.invalid) {
      return;
    }
    this.user_reg_data = this.signUpFrom.value;
    this.user_dto = {
      email: this.user_reg_data.email,
      language: this.user_reg_data.language,
      name: this.user_reg_data.name,
      password: this.user_reg_data.password,
      confirmPassword: this.user_reg_data.confirmPassword,
      role: this.user_reg_data.role,
      // uploadPhoto: this.user_reg_data.uploadPhoto,
    }

    this.loginService.userRegister(this.user_dto).subscribe(
      data => {
        console.log(data);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
        this.router.navigate(['sign-in']);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    )
    
    
  }

  onSubmitSignIn(){
    this.loginService.authLogin(this.signInFromValue.userEmail, this.signInFromValue.userPassword).subscribe(
      data => {
        this.user_data = data;
        if(this.user_data.length == 1){
          if(this.user_data[0].role == 'seller'){
            sessionStorage.setItem("user_session_id", this.user_data[0].id);
            sessionStorage.setItem("role", this.user_data[0].role);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successfully' });
            this.router.navigateByUrl('/seller-dashboard');
          }else if(this.user_data[0].role == 'buyer'){
            sessionStorage.setItem("user_session_id", this.user_data[0].id);
            sessionStorage.setItem("role", this.user_data[0].role);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successfully' });
            this.router.navigateByUrl('/buyer-dashboard');
          }else{
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid login details' });
          }
        }else{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid' });
        }
        console.log(this.user_data)
      }, error => {
        console.log("My error", error)
      }
    )
  }

  get userEmail(){
    return this.signInFrom.controls['userEmail'];
  }
  get userPassword(){
    return this.signInFrom.controls['userPassword'];
  }



}
