import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  logged_in: boolean = false;
  language: string = 'English';
  user_role!: any;
  user: string = 'userweb';

  constructor(
    private router:Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.user_role = sessionStorage.getItem("role");
    const user_session_id = sessionStorage.getItem("user_session_id");
    if(user_session_id){
      this.logged_in = true
    }
  }

  logout(){
    sessionStorage.removeItem("user_session_id");
    sessionStorage.removeItem("role");
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You logout' });
    this.router.navigateByUrl('/sign-in');
    location.reload();
  }

}
