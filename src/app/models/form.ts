export interface Address {
    street: string;
    city: string;
    state: string;
  }
  
  export interface FormState {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    address: Address;
  }
  