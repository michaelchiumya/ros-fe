import { Component, OnInit } from '@angular/core';
import {Menu} from "../../models/menu.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 menu: any = undefined;

  constructor() { }

  ngOnInit(): void {
     this.menu = {
      "id": 1, "name": "menu 1", "active":false, "type": "Lunch",

    }
  }

}
