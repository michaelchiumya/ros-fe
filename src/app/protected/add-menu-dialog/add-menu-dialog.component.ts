import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Menu } from '../../models/menu.model';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-add-menu-dialog',
  templateUrl: './add-menu-dialog.component.html',
  styleUrls: ['./add-menu-dialog.component.css']
})
export class AddMenuDialogComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(Math.random()),
    name: new FormControl(),
    active: new FormControl(),
    type: new FormControl()
  });

  error: any;

  constructor(
       private fb: FormBuilder,
       private menuService: MenuService,
    private dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) { id, name, active, type }: Menu)
  {  }

  ngOnInit() {  }

  save() {
    this.menuService.create(this.form.value).subscribe(
      res => {

      },
      error => {
        this.error = error;
      }
    );

    this.dialogRef.close(this.form.value);
  }

  close() {
       this.dialogRef.close();
  }

}
