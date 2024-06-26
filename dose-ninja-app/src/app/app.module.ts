
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { LoginComponent }
 from './login/login.component';
import { MedicationManagementComponent } from './medication-management/medication-management.component';
import { AppRoutingModule } from './app.routes';
import { MedicationService } from './services/medication.service'; // Adjusted path
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, LoginComponent, MedicationManagementComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule], 
  providers: [MedicationService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
