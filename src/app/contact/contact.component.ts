import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  addressForm = this.fb.group({
    company: null,
    name: [null, Validators.required],
    message: [null, Validators.required],
    email: [null, Validators.required],
    subject : [null, Validators.required]

  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
