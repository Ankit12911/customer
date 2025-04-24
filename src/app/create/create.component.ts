import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  customerName: string = '';
  customerEmail: string = '';
  customerPhone: string = '';

  constructor(private router: Router, private customerService: CustomerService) {}

  onSubmit(): void {
    const newCustomer = {
      name: this.customerName,
      email: this.customerEmail,
      phone: this.customerPhone
    };

    this.customerService.addCustomer(newCustomer);

  }
}
