import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { PhotoListModule } from './components/photo-list/photo-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikeWidgetModule,
    HttpClientModule,
    PhotoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
