

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveFormData, resetForm } from './form.action';
import { FormState } from '../../models/form';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  formState$: Observable<FormState>;

  constructor(private fb: FormBuilder, private store: Store<{ form: FormState }>) {
    this.formState$ = store.select('form');
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required]
      })
    });

    // Load saved data from the store
    this.formState$.subscribe((data) => {
      if (data) this.form.patchValue(data);
    });
  }

  saveAsDraft() {
    this.store.dispatch(saveFormData({ formData: this.form.value }));
    alert('Draft saved!');
  }

  resetForm() {
    this.store.dispatch(resetForm());
    this.form.reset();
  }
}

