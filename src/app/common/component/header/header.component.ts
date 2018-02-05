import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog : MatDialog) { }


  ngOnInit() {
  }

  showLoginForm() {

    this.dialog.open(LoginComponent,{width:'430px',height:'350px'});


  }

}
