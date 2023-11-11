import { AddressData } from ".";
import { CartData } from ".";
export interface OrderData {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  totalPayment: number;
  idPayment: string;
  addressShipping: AddressData;
  products: CartData[];
  createdAt: string;
  updatedAt: string;
}
