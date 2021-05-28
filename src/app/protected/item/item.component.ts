import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    itemForm = new FormGroup({
       name: new FormControl(),
       active: new FormControl(),
       type: new FormControl(),
       price: new FormControl(),
       sop: new FormControl(),
       description: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {}

  itemSubmit() {
    console.log(this.itemForm.value);
  }

}
