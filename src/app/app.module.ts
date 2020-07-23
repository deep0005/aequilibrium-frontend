import { UrlService } from './service/http/url.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FightComponent } from './view/fight/fight.component';
import { ApiService } from './service/http/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from "@angular/material";
  import {MatFormFieldModule} from '@angular/material/form-field';
import { TopbarComponent } from './view/common/topbar/topbar.component';
import { FooterComponent } from './view/common/footer/footer.component';
import { AppConstantsService } from './service/app-constants.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FightComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [ApiService, UrlService, AppConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
