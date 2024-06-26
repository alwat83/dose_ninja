
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MedicationManagementComponent } from './medication-management/medication-management.component';
import { AppRoutingModule } from './app.routes';
import { MedicationService } from './app/services/medication.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, MedicationManagementComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [MedicationService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [MedicationManagementComponent] // Consider if this is really needed
})
export class AppModule {}
