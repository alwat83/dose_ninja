
import {
  Component, OnInit } from '@angular/core';
 import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
 
 @Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
 
 })
 export class RegisterComponent implements OnInit {
 
   registerForm: FormGroup = new FormGroup({});
 
   ngOnInit(): void {
     this.registerForm = new FormGroup({
       name: new FormControl('', { nonNullable: true, validators: Validators.required }),
       dob: new FormControl('', { nonNullable: true, validators: [Validators.required, this.validateDOB] }),
       email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
       password: new FormControl('', { 
         nonNullable: true, 
         validators: [
 
           Validators.required,
           Validators.minLength(10),
           Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
         ] 
       })
     });
   }
 
   validateDOB(control: AbstractControl): { invalidAge: boolean } | null {
     const dob = new Date(control.value);
     const today = new Date();
     const age = today.getFullYear() - dob.getFullYear();
     if (age < 18) {
       return { 'invalidAge': true };
     }
     return null;
   }
 
   register() {
     if (this.registerForm.valid) {
       // TODO: Send registration data to your backend service
       console.log(this.registerForm.value); 
     }
   }
 }
 