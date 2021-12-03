import { CUSTOM_ELEMENTS_SCHEMA, NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { BillingDetailsComponent } from './components/billing-details/billing-details.component';
import { VisitChecklistComponent } from './components/visit-checklist/visit-checklist.component';
import { CptDetailsComponent } from './components/cpt-details/cpt-details.component';
import { IcdDetailsComponent } from './components/icd-details/icd-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingDetailsComponent,
    VisitChecklistComponent,
    CptDetailsComponent,
    IcdDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
