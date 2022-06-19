import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './views/home/home.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { AppHeader } from './layouts/app-header/app-header.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';

@NgModule({
  declarations: [
    AppComponent, 
    AppHeader, 
    SignInComponent, 
    SignUpComponent, 
    HomeComponent, 
    CarTableComponent, 
    TableFilterComponent
  ],
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