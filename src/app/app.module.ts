import { CUSTOM_ELEMENTS_SCHEMA, NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { BillingDetailsComponent } from './components/billing-details/billing-details.component';
import { CptDetailsComponent } from './components/cpt-details/cpt-details.component';
import { IcdDetailsComponent } from './components/icd-details/icd-details.component';
import { ClaimDetailsComponent } from './components/claim-details/claim-details.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    BillingDetailsComponent,
    CptDetailsComponent,
    IcdDetailsComponent,
    ClaimDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    MatSelectModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MatTabsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
