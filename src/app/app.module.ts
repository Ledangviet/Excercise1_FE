import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    NavigationModule,
    DialogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
