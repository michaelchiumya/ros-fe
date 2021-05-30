import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './protected/dashboard/dashboard.component';
import { MenuComponent } from './protected/menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ItemComponent} from "./protected/item/item.component";
import {TableComponent} from "./protected/table/table.component";
import {AddTableComponent} from "./protected/add-table/add-table.component";
import {MenuItemsComponent} from "./protected/menu-items/menu-items.component";
import {OrderComponent} from "./protected/order/order.component";
import {FrontMenuComponent} from "./protected/front-menu/front-menu.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },



  { path: 'dashboard', component: DashboardComponent, children:[
      { path: 'menu', component: MenuComponent },
      { path: 'menu/:id/item', component: ItemComponent},
      { path: 'table', component: TableComponent },
      { path: 'menu/:id/items', component: MenuItemsComponent },
      { path: 'add-table', component: AddTableComponent },
      { path: 'order', component: OrderComponent },
      { path: 'front-menu', component: FrontMenuComponent },

      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
