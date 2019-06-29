import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NodeArticlesComponent } from './node-articles/node-articles.component';
import { NodeArticlesService } from './node-articles/node-articles.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule, MatTableModule, MatDialogModule, MatProgressSpinnerModule, MatProgressBarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NodeArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  providers: [
    NodeArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
