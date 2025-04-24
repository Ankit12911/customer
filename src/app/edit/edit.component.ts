import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  customerId: number | null = null;
  customerName: string = '';
  customerEmail: string = '';
  customerPhone: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) {}

  ngOnInit() {
    this.customerId = +this.route.snapshot.paramMap.get('id')!;

 
    const customer = this.customerService.getCustomers().find(c => c.id === this.customerId);

    if (customer) {
      this.customerName = customer.name;
      this.customerEmail = customer.email;
      this.customerPhone = customer.phone;
    }
  }

  onSubmit() {
    const updatedCustomer = {
      id: this.customerId!,
      name: this.customerName,
      email: this.customerEmail,
      phone: this.customerPhone
    };

 
    this.customerService.editCustomer(updatedCustomer);

    
    this.router.navigate(['/table']);
  }
}
