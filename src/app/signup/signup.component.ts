import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( public dialogRef:MatDialogRef<SignupComponent>) { }

  user = {remember:false};

  ngOnInit() {
  }

  onSubmit()
  {
    console.log("User: ",this.user);
    this.dialogRef.close();
  }

}
