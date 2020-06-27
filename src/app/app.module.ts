import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

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
    MatFormFieldModule, MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatInputModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
