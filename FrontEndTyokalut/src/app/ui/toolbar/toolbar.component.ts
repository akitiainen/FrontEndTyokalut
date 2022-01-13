import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import {AuthComponent} from '../../auth/auth.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  password: string;
  email: string;

  constructor(private router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  signIn() {
    // this.router.navigate(['/login']);
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '500px',
      data: {email: this.email, password: this.password}
    });
  }

  goCalculator() {
    this.router.navigate(['calculator']);
  }
  goForm() {
    this.router.navigate(['form']);
  }
  goReactive() {
    this.router.navigate(['reactive']);
  }
  goFinnkino() {
    this.router.navigate(['finnkino']);
  }
  goFeedback() {
    this.router.navigate(['feedback']);
  }
  goConverter() {
    this.router.navigate(['converter']);
  }
}
