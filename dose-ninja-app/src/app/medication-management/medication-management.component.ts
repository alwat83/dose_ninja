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
  newMedication: Medication = new Medication();

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.medications = this.medicationService.getMedications();
  }

  addMedication(): void {
    this.medicationService.addMedication(this.newMedication);
    this.medications = this.medicationService.getMedications();
    this.newMedication = new Medication();
  }

  deleteMedication(id: number): void {
    this.medicationService.deleteMedication(id);
    this.medications = this.medicationService.getMedications();
  }
}
