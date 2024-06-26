import { Injectable } from '@angular/core';
import { Medication } from '../models/medication.model';
import { of } from 'rxjs'; // Import 'of' from RxJS

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private medications: Medication[] = [];

  constructor() { }

  addMedication(medication: Medication) {
    this.medications.push(medication);
  }

  getMedications() { 
    return of(this.medications); // Now returns an Observable
  }

  deleteMedication(id: number) {
    this.medications = this.medications.filter(medication => medication.id !== id);
  }
}
