import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customers:Customer[]=[];
currentCustomer: Customer={ id:0, companyName:"", userId:0}
dataLoaded = false
  constructor( private customerService:CustomerService) {}

  ngOnInit(): void {
    this.getcustomers();
  }
  getcustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data;
      this.dataLoaded = true
    })
  }

  
  setCurrentCustomer(customer:Customer){
    this.currentCustomer = customer
  }

  getCurrentCustomerClass(customer: Customer){
    if(customer==this.currentCustomer){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}


