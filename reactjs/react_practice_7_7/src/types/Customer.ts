export interface Customer {
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  birthday: string;
  email: string;
}

export interface CreateCustomerRequest {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  birthday: string;
  email: string;
}

export interface UpdateCustomerRequest {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  birthday: string;
  email: string;
}
