import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
 import {MatButtonModule} from '@angular/material/button';
import { FormsModule} from '@angular/forms';
import { MatInputModule, MatInput} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import 'hammerjs';
import { MyAppComponent } from './my-app/my-app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent, MyAppComponent, LoginComponent, RegisterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    RouterModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
