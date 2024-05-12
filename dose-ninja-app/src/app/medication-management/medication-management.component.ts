// src/app/medication-management/medication-management.component.ts
import { Component, OnInit } from '@angular/core';
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
    this.medications = this.medicationService.getMedications();
  }

  addMedication(medication: Medication) {
    this.medicationService.addMedication(medication);
    this.medications = this.medicationService.getMedications();
  }

  deleteMedication(id: number) {
    this.medicationService.deleteMedication(id);
    this.medications = this.medicationService.getMedications();
  }
}
