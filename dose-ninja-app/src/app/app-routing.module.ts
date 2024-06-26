
import { NgModule
} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';

import { MedicationManagementComponent } from './medication-management/medication-management.component';

const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'medications', component: MedicationManagementComponent } // New route
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
