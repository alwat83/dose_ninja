import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationManagementComponent } from './medication-management/medication-management.component';

export const routes: Routes = [
  { path: '', component: MedicationManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
