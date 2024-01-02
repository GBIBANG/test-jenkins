import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormProcessService {

  constructor(private formBuilder: FormBuilder) { }

  generateProductFormGroup(data:any) {
    return this.formBuilder.group({
      name: [data?.name || '', Validators.required],
      description: [data?.description || '', Validators.required],
      price: [data?.price || '', Validators.required]
    });
  }
}
