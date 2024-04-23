import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../core/model/object-model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{

  userProfileForm!: FormGroup;
  userProfile:boolean = false;
  user_id!:number;
  user_data:any;
  user_update_data:any;
  user_dto!:User;
  user_language:any;
  user_role:any;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private userService:UserService,
    private messageService: MessageService, 
  ){}

  ngOnInit(): void {
    this.user_id = Number(sessionStorage.getItem('user_Session_id'));
    this.userProfileForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email: ['', Validators.required, Validators.email],
      language: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
    this.editUserData(this.user_id)
  }

  get rf(){
    return this.userProfileForm.controls;
  }

  editUserData(user_id:any){
    this.userService.getUserData(user_id).subscribe(data => {
      this.user_data = data;
      this.user_language = this.user_data.language;
      this.user_role = this.user_data.role;
      this.userProfileForm.setValue({
        name:this.user_data.name,
        email: this.user_data.email,
        language: this.user_data.language,
        password: this.user_data.password,
        confirmPassword: this.user_data.confirmPassword,
        role: this.user_data.role,
      })
    }, error=> {
      console.log("My error", error)
    })
  }

  updateProfile(){
    this.userProfile = true;
    if(this.userProfileForm.invalid){
      return;
    }
    this.user_update_data = this.userProfileForm.value;
    this.user_dto = {
      email: this.user_update_data.email,
      language: this.user_update_data.language,
      name: this.user_update_data.name,
      password: this.user_update_data.password,
      confirmPassword: this.user_update_data.confirmPassword,
      role: this.user_update_data.role,
    }
    this.userService.updateUserData(this.user_id, this.user_dto).subscribe( data => {
      // this.userProfileForm.reset();
      // this.getAllUser();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record Updated' });
      if(this.user_role == 'admin'){
        this.router.navigateByUrl('/admin-dashboard')
      }else if(this.user_role == 'seller'){
        this.router.navigateByUrl('/seller-dashboard')
      }else if(this.user_role == 'buyer'){
        this.router.navigateByUrl('/buyer-dashboard')
      }
     
    }, error=>{
      console.log("my fault", error)
    })
  }

}
