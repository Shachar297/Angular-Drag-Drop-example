import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from '../components/layout/layout.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MoviesComponent } from '../components/movies/movies.component';
@NgModule({
  declarations: [
    LayoutComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
