import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( public dialogRef:MatDialogRef<LoginComponent>
  , private authService: AuthService) { }

  user = {phone: '', password: '',remember:false};
  errMess: string;

  ngOnInit() {
  }

  onSubmit()
  {
    console.log("User: ",this.user);
    console.log("User: ", this.user);
    this.authService.logIn(this.user)
      .subscribe(res => {
        if (res.success) {
          this.dialogRef.close(res.success);  
          alert(res.status);         
        }
        else {
          console.log(res);
          alert(res.status); 
        }
      },
      error => {
        console.log(error);
        this.errMess = error
        alert(error); 
      })
  }
}
