import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ItemService} from "../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
   //public error var to store error message for component
    public error:any;
    //variable to store menu id
    private  menuId?: any;

    itemForm = new FormGroup({
       name: new FormControl(),
       active: new FormControl(),
       type: new FormControl(),
       price: new FormControl(),
       special_of_the_day: new FormControl(),
       description: new FormControl(),
       menu: new FormControl()
  });
  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.menuId = this.activatedRoute.snapshot.params;
  }

  itemSubmit() {
    //set the var of menu from form to url menu id for api reference and convert to number for json
    this.itemForm.get('menu')?.setValue(Number(this.menuId.id))

    //send form values to service
    this.itemService.create(this.itemForm.value).subscribe(
      res => {

      },
      error => {
        //get var error assigned from observable error var
        this.error = error;
      })

    //view form values on console for testing
    console.log(this.menuId);
  }

}
