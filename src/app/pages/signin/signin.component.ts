import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  login : FormGroup|any;

  constructor(private _http:HttpClient, private _router:Router){}

  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl(),
      'password' : new FormControl()
    })
  }

  logindata(login:FormGroup){
    console.log(this.login.value)
    this._http.get<any>("http://localhost:3000/signin")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.fname === this.login.value.email && a.password === this.login.value.password
      });

      if(user){
        alert('you are successfully login');
        this.login.reset();
        this._router.navigate(['userprofile']);
      }else{
        alert('User not found');
        this._router.navigate(['signin']);
      }

   })

  }

}
