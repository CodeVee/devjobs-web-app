import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from '@ngneat/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchModalComponent } from './components/search-modal/search-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    HeaderComponent,
    JobCardComponent,
    SearchBarComponent,
    SearchModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
