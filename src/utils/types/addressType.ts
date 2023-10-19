export interface AddressData {
  id: number;
  attributes: AddressAttributes;
}

export interface AddressAttributes {
  title: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  phone: string;
  createdAt?: string;
  updatedAt?: string;
}
