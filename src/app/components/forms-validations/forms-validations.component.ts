import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-validations',
  templateUrl: './forms-validations.component.html',
  styleUrls: ['./forms-validations.component.css']
})
export class FormsValidationsComponent implements OnInit{
  studentForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  };

  ngOnInit() {
    this.studentForm = this._formBuilder.group({
      studentName: ['', [Validators.required,Validators.minLength(3),Validators.pattern("[A-Za-z].*")]],
      email: ['', [Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]]
    });
  }

  onSubmit() {
    if (this.studentForm.invalid) {
      return;
    }
    let obj = {
      studentName: this.studentForm.get('studentName')?.value,
      email: this.studentForm.get('email')?.value,
      phone: this.studentForm.get('phone')?.value,
      password: this.studentForm.get('password')?.value,
    };
    console.log(obj);
  }

  get checkError() {
    return this.studentForm.controls;
  }
}
