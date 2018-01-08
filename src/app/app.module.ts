import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WoopComponent } from './woop/woop.component';
import {AppRoutingModule} from "./app-routing.module";
import {WoopService} from "./shared/woop.service";
import {WoopListComponent} from "./woop/woop-list/woop-list.component";
import {WoopDetailsComponent} from "./woop/woop-details/woop-details.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    WoopComponent,
    WoopListComponent,
    WoopDetailsComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WoopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
