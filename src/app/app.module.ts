import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyListService } from './my-list.service';
import { SelectedItemComponent } from './selected-item/selected-item.component'

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    SelectedItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MyListService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
