import { Component, OnInit } from '@angular/core';
import { Medication } from '../app/models/medication.model';
import { MedicationService } from '../app/services/medication.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule directly
import { CommonModule } from '@angular/common'; // Import for *ngFor, etc.

@Component({
  selector: 'app-medication-management',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add necessary imports
  templateUrl: './medication-management.component.html',
  styleUrls: ['./medication-management.component.css']
})
export class MedicationManagementComponent implements OnInit {
  medications: Medication[] = [];
  newMedication: Medication = new Medication();

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.medicationService.getMedications().subscribe(medications => {
      this.medications = medications; 
    });
  }

  addMedication(): void {
    this.medicationService.addMedication(this.newMedication);
    this.medicationService.getMedications().subscribe(medications => {
      this.medications = medications; 
    });
    this.newMedication = new Medication();
  }

  deleteMedication(id: number): void {
    this.medicationService.deleteMedication(id);
    this.medicationService.getMedications().subscribe(medications => {
      this.medications = medications; 
    });
  }
}
