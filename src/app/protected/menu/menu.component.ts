import { Component, OnInit } from '@angular/core';
import {Menu} from "../../models/menu.model";
import {MenuService} from "../../services/menu.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   menus: Menu[] | undefined

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.get().subscribe(
      res => {
        this.menus = res;
      }
    );
  }

}
