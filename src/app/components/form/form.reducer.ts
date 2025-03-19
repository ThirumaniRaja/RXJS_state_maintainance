import { createReducer, on } from '@ngrx/store';
import { saveFormData, resetForm } from './form.action';
import { FormState } from '../../models/form';

export const initialState: FormState = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  phone: '',
  address: {
    street: '',
    city: '',
    state: ''
  }
};

const _formReducer = createReducer(
  initialState,
  on(saveFormData, (state, { formData }) => ({ ...formData })),
  on(resetForm, () => initialState)
);

export function formReducer(state: any, action: any) {
  return _formReducer(state, action);
}
