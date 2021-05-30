import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddMenuDialogComponent } from '../add-menu-dialog/add-menu-dialog.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    //reroute to menu page as dashboard comp will always show when logged
    this.router.navigate(['dashboard/menu']).then(r => null);
  }

  openDialog() {
   //initialising MatdialogConfig object
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};
    dialogConfig.height ="600";



    this.dialog.open(AddMenuDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(AddMenuDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }
}


