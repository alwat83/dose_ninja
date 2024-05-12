import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component'; 
import { LoginComponent } from '../login/login.component'; 
import { MedicationManagementComponent } from '../medication-management/medication-management.component'; 
import { AppRoutingModule } from '../app.routes'; 
import { MedicationService } from './services/medication.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, LoginComponent, MedicationManagementComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MedicationService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [MedicationManagementComponent],
})
export class AppModule {}
export class MedicationManagementModule {}