import { CustomerType } from '../entities/Customer';

export default interface CustomerUseCase {
  fetchCustomers(): CustomerType[];
  getCustomers(): CustomerType[];

  saveCustomers(customer: CustomerType[]): void;
  saveCustomer(customer: CustomerType): void;
}
