import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    PagesModule,
    LoadingSpinnerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
