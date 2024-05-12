import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MedicationManagementComponent } from './medication-management/medication-management.component';
import { MedicationService } from './services/medication.service';

@NgModule({
  declarations: [AppComponent, MedicationManagementComponent],
  imports: [BrowserModule],
  providers: [MedicationService], // Register the MedicationService as a provider
  bootstrap: [AppComponent]
})
export class AppModule {}
providers: [MedicationService]