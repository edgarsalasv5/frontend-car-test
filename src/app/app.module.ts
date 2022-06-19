import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store';
import { ApiService } from './services/api.service';
import { AppRoutingModule } from './app-routing.module';
import { CarEffects } from './store/modules/car/effect';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './views/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { JwtInterceptor } from './services/jwt-interceptor.service';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { AppHeader } from './layouts/app-header/app-header.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { CreateConfirmComponent } from './components/create-confirm/create-confirm.component';
import { CarCreateModalComponent } from './components/car-create-modal/car-create-modal.component';


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
    StoreModule.forRoot(reducers,
      {
        metaReducers,
        runtimeChecks: {
          strictStateSerializability: true,
          strictActionSerializability: true
        }
      }
    ),
    EffectsModule.forRoot([CarEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    ApiService,
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }