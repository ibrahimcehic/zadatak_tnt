import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';
import { CalendarWeekComponent } from './calendar-week/calendar-week.component';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    CalendarMonthComponent,
    CalendarWeekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CalendarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
