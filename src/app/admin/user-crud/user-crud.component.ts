import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/model/object-model';
import { passwordMatchValidator } from 'src/app/shared/password.match.directice';
import { MessageService } from 'primeng/api';
declare var $:any;
@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.scss']
})
export class UserCrudComponent implements OnInit{

  all_user_data:any;
  single_user_data:any;
  addEditUserForm!: FormGroup;
  user_dto!:User;
  user_reg_data:any;
  edit_user_id:any;
  addEditUser:boolean = false;// for Form validation
  add_user:boolean = false;
  edit_user:boolean = false;
  popup_header!:string;
  signInFormValue:any = {};

  constructor(
    private router:Router, 
    private adminService: AdminService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,  
  ){}

  ngOnInit(): void {
    this.getAllUser();
    this.addEditUserForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email: ['', Validators.required, Validators.email],
      language: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: passwordMatchValidator
    });

  }

  getAllUser(){
    this.adminService.allUser().subscribe( data => {
      this.all_user_data = data;
    }, error => {
      console.log("My Fault", error)
    })
  }

  get rf(){
    return this.addEditUserForm.controls
  }

  addUserPopup(){
    this.edit_user = false;
    this.add_user = true;
    this.popup_header = "Add New User";
    this.addEditUserForm.reset();
  }

  addUser(){
    this.addEditUser = true;
    if(this.addEditUserForm.invalid){
      alert('Error!! :-)\n\n' + JSON.stringify(this.addEditUserForm.value));
      return;
    }
    this.user_reg_data = this.addEditUserForm.value;
    this.user_dto = {
      email: this.user_reg_data.email,
      language: this.user_reg_data.language,
      name: this.user_reg_data.name,
      password: this.user_reg_data.password,
      confirmPassword: this.user_reg_data.confirmPassword,
      role: this.user_reg_data.role,
    }
    this.adminService.addUSer(this.user_dto).subscribe( data => {
      this.addEditUserForm.reset();
      this.getAllUser();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record added' });
      $('#addEditUserModal').modal('toggle');
    }, error=>{
      console.log("My error", error)
    })
  }

  editUserPopup(user_id:any){
    this.edit_user_id = user_id;
    this.edit_user = true;
    this.add_user = false;
    this.popup_header = "Edit User";
    this.adminService.singleUser(user_id).subscribe( data=> {
      this.single_user_data = data;
      this.addEditUserForm.setValue({
        name:this.single_user_data.name,
        email: this.single_user_data.email,
        language: this.single_user_data.language,
        password: this.single_user_data.password,
        confirmPassword: this.single_user_data.confirmPassword,
        role: this.single_user_data.role,
      });
    }, error=>{
      console.log("My error", error)
    })
  }

  updateUser(){
    
    if(this.addEditUserForm.invalid){
      alert('Error!! :-)\n\n' + JSON.stringify(this.addEditUserForm.value));
      return;
    }
    this.user_reg_data = this.addEditUserForm.value;
    this.user_dto = {
      email: this.user_reg_data.email,
      language: this.user_reg_data.language,
      name: this.user_reg_data.name,
      password: this.user_reg_data.password,
      confirmPassword: this.user_reg_data.confirmPassword,
      role: this.user_reg_data.role,
    }
    this.adminService.editUser(this.edit_user_id, this.user_dto).subscribe( data => {
     
      this.addEditUserForm.reset();
      this.getAllUser();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record Updated' });
      $('#addEditUserModal').modal('toggle');
    }, error=>{
      console.log("my fault", error)
    })
  }

  deleteUser(user_id:any){
    this.adminService.deleteUser(user_id).subscribe( data=> {
      this.getAllUser();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record deleted' });
    }, error=>{
      console.log("here is an error", error)
    })
  }


}
