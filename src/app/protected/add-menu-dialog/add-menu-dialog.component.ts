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
    name: new FormControl(),
    active: new FormControl(),
    type: new FormControl(),
    description: new FormControl(),
  });

  error: any;

  constructor(
       private fb: FormBuilder,
       private menuService: MenuService,
    private dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) { id, name, active, type, description }: Menu)
  {  }

  ngOnInit() {  }

  save() {

    // this.form.patchValue({
    //   active : JSON.parse(this.form.get('active')?.value)
    // })
    // this.menuService.create(this.form.value).subscribe(
    //   res => {
    //
    //   },
    //   error => {
    //     this.error = error;
    //   }
    // );

    // this.dialogRef.close(this.form.value);
    // var formData = new FormData();
    // let active : boolean = this.form.get('active')?.value;
    // formData.append('name',this.form.get('name')?.value);
    // formData.append('active',  this.form.get('active')?.value);
    // formData.append('type', this.form.get('type')?.value);
    // formData.append('description', this.form.get('description')?.value);
    this.form.get('active')?.setValue(Boolean(JSON.parse(this.form.get('active')?.value)));

    this.menuService.create( this.form.value).subscribe( res => { }, error => { this.error = error; } );
    //this.videoForm.reset();
    this.dialogRef.close( this.form.value);
  }

  close() {
       this.dialogRef.close();
  }

}
