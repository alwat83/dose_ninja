// src/app/services/medication.service.ts
import { Injectable } from '@angular/core';
import { Medication } from '../models/medication.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private medications: Medication[] = [];

  constructor() { }

  addMedication(medication: Medication) {
    this.medications.push(medication);
  }

  getMedications(): Medication[] {
    return this.medications;
  }

  deleteMedication(id: number) {
    this.medications = this.medications.filter(medication => medication.id !== id);
  }
}
