import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( public dialogRef:MatDialogRef<SignupComponent>,
    private authService: AuthService) { }

  user = {username:"" , remember:false,phone:"", adress:"",pincode:"",password:""};
  errMess: string;

  ngOnInit() {
  }

  onSubmit()
  {
    console.log("User: ",this.user);
    this.authService.signUp(this.user)
    .subscribe(res => {
     
      if (res.success) {
        this.dialogRef.close(res.success);
        alert(res.status);         
      }
      else {
        alert(res.status)
      }
    },
    error => {
      alert(error)
    })
  }

}
