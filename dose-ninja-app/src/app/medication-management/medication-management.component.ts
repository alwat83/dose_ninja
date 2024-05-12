// src/app/medication-management/medication-management.component.ts
import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../services/medication.service';
import { Medication } from '../models/medication.model';

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
