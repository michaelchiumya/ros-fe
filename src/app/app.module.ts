import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuService } from './services/menu.service';
import { ItemService } from './services/item.service'

import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './protected/dashboard/dashboard.component';
import { MenuComponent } from './protected/menu/menu.component';
import { AddMenuDialogComponent } from './protected/add-menu-dialog/add-menu-dialog.component';
import { ItemComponent } from './protected/item/item.component';
import { TableComponent } from './protected/table/table.component';
import { AddTableComponent } from './protected/add-table/add-table.component';
import { MenuItemsComponent } from './protected/menu-items/menu-items.component';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    MenuComponent,
    AddMenuDialogComponent,
    ItemComponent,
    TableComponent,
    AddTableComponent,
    MenuItemsComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule

  ],
  providers: [
    MenuService,
    ItemService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddMenuDialogComponent]


})
export class AppModule { }

