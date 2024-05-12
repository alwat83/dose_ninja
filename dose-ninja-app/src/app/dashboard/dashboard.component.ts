// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../app/services/medication.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Dashboard</h1>
    <ul>
      <li *ngFor="let medication of medications">
        {{ medication.name }} ({{ medication.dosage }})
      </li>
    </ul>
  `
})
export class DashboardComponent implements OnInit {
  medications: any[];

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.medicationService.getMedications().subscribe((medications) => {
      this.medications = medications;
    });
  }
}
