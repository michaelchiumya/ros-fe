import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
     error:any;
    itemForm = new FormGroup({
       name: new FormControl(),
       active: new FormControl(),
       type: new FormControl(),
       price: new FormControl(),
       sop: new FormControl(),
       description: new FormControl()
  });
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {}

  itemSubmit() {
    this.menuService.addItem(1,this.itemForm.value).subscribe(
      res => {

      },
      error => {
        this.error = error;
      })
    console.log(this.itemForm.value);
  }

}
