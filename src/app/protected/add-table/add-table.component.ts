import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {


  tableForm = new FormGroup({
    name: new FormControl(),
    status: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  tableSubmit() {
    console.log(this.tableForm.value);
  }

}
