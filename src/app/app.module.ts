import { AppHeader } from './app-header/app-header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CarTableComponent } from './car-table/car-table.component';
import { TableFilterComponent } from './table-filter/table-filter.component';

@NgModule({
  declarations: [AppComponent, AppHeader, SignInComponent, SignUpComponent, HomeComponent, CarTableComponent, TableFilterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}