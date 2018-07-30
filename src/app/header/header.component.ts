import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  username: string = undefined;
  subscription: Subscription;

  constructor( public dialog:MatDialog,
                private authService : AuthService) { }

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.username = this.authService.getName();
    
    this.subscription = this.authService.getUsername()
      .subscribe(name => { console.log(name); this.username = name; }); 


  }

  openLoginForm()
  {
    let loginRef  = this.dialog.open(LoginComponent,{width : '500px' ,height : '450px'})
    
        loginRef.afterClosed()
          .subscribe(result => {
            console.log(result);
          });
  }
  openSignupForm()
  {
    this.dialog.open(SignupComponent,{width:"500px",height:"450px"});
  }

  logOut() {
    this.username = undefined;
    this.authService.logOut();
  }

}
