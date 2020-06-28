import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewGraphComponent } from './view-graph/view-graph.component';

import { TempeDBService } from './services/tempeDB.service';
import { ViewDatasComponent } from './view-datas/view-datas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    ViewGraphComponent,
    ViewDatasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule, MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatInputModule,
    MatGridListModule, MatDividerModule, MatSidenavModule, MatSlideToggleModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule, TempeDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
