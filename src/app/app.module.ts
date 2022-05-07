import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TPageCComponent } from './t-page-c/t-page-c.component';


@NgModule({
  declarations: [
    TPageCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TPageCComponent]
})
export class AppModule { } 