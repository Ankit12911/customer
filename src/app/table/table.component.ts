import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  customers: any[] = [];

  constructor(private router: Router, private customerService: CustomerService) {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customers = this.customerService.getCustomers();
    
  }

  deleteCustomer(customerId: number) {
    this.customerService.deleteCustomer(customerId);
    this.loadCustomers(); 
  }

  editCustomer(customerId: number) {
    this.router.navigate([`/edit/${customerId}`]);
  }
}
