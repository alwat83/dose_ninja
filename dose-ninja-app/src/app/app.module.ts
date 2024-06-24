import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MedicationManagementComponent } from './medication-management/medication-management.component';
import { AppRoutingModule } from './app.routes';
import { MedicationService } from './app/services/medication.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [AppComponent, LoginComponent, MedicationManagementComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MedicationService],
  schemas: const [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [MedicationManagementComponent],
})
export class AppModule {}
export class MedicationManagementModule {}