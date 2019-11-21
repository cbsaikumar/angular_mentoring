import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  goLogin(){
    this.router.navigate(['login'])
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
