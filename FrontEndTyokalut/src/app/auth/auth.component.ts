import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {DialogData} from '../app.module';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService, public dialogRef: MatDialogRef<AuthComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  signIn() {
    // this.router.navigate(['/admin']);
    this.authService.login(this.email, this.password);
    this.dialogRef.close();
  }
}
