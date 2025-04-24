import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: { id: number, name: string, email: string, phone: string }[] = [];

  constructor() {
  
    this.customers = JSON.parse(localStorage.getItem('customers') || '[]');
  }

  
  getCustomers() {
    return this.customers;
  }

 
  addCustomer(customer: { name: string, email: string, phone: string }) {
    const newCustomer = { ...customer, id: Date.now() }; 
    this.customers.push(newCustomer);
    this.updateLocalStorage();
    return newCustomer;
  }

  editCustomer(updatedCustomer: { id: number, name: string, email: string, phone: string }) {
    const index = this.customers.findIndex(customer => customer.id === updatedCustomer.id);
    if (index !== -1) {
      this.customers[index] = updatedCustomer;
      this.updateLocalStorage();
    }
  }

  deleteCustomer(customerId: number) {
    this.customers = this.customers.filter(customer => customer.id !== customerId);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }
}
