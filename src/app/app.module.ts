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
import { CarCreateModalComponent } from './components/car-create-modal/car-create-modal.component';
import { CreateConfirmComponent } from './components/create-confirm/create-confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent, 
    AppHeader, 
    SignInComponent, 
    SignUpComponent, 
    HomeComponent, 
    CarTableComponent, 
    TableFilterComponent,
    CarCreateModalComponent,
    CreateConfirmComponent,
    ErrorMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [ApiService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}