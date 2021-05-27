import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Menu } from '../../models/menu.model';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-add-menu-dialog',
  templateUrl: './add-menu-dialog.component.html',
  styleUrls: ['./add-menu-dialog.component.css']
})
export class AddMenuDialogComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(),
    active: new FormControl(),
    type: new FormControl()
  });
 

  constructor(
       private fb: FormBuilder,
    private dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) { id, name, active, type }: Menu)
  {  
   



  }

ngOnInit() {

  
    
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
