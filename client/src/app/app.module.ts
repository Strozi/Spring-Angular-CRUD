import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarListComponent } from './car-list/car-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarService } from './shared/car/car.service';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
