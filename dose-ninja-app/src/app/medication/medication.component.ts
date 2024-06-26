// src/app/medication-management/medication-management.component.ts
import { Component, OnInit } from '@angular/core';
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3886650150.
import { Medication } from '../app/models/medication.model';
import { MedicationService } from '../app/services/medication.service';

@Component({
  selector: 'app-medication-management',
  templateUrl: './medication-management.component.html',
  styleUrls: ['./medication-management.component.css']
})
export class MedicationManagementComponent implements OnInit {

  medications: Medication[] = [];

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.medicationService.getMedications().subscribe(medications => {
      this.medications = medications; // Now 'medications' is a Medication[]
    });
  }

addMedication(medication: Medication) {
  this.medicationService.addMedication(medication);
  this.medicationService.getMedications().subscribe(medications => {
    this.medications = medications; 
  });
}

deleteMedication(id: number) {
  this.medicationService.deleteMedication(id);
  this.medicationService.getMedications().subscribe(medications => {
    this.medications = medications;
  });
}
}
