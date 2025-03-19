import { createAction, props } from '@ngrx/store';
import { FormState } from '../../models/form';

// Action to save form data
export const saveFormData = createAction(
  '[Form] Save Form Data',
  props<{ formData: FormState }>()
);

// Action to reset form
export const resetForm = createAction('[Form] Reset Form');
