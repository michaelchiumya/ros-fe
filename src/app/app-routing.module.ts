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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard', component: DashboardComponent, children:[
      { path: 'menu', component: MenuComponent },
      { path: 'menu/item', component: ItemComponent},
      { path: 'table', component: TableComponent },
      { path: 'add-table', component: AddTableComponent },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
