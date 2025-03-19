import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: any = null;

  saveDraft(data: any) {
    this.formData = data;
  }

  getDraft() {
    return this.formData;
  }
}
