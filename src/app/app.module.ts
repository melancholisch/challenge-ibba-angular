
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CompaniesListComponent } from "./pages/companies-list/companies-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompaniesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }