import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cus',
  templateUrl: './add-edit-cus.component.html',
  styleUrls: ['./add-edit-cus.component.css']
})
export class AddEditCusComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cus:any;
  id:number=0;
  firstName:string="";
  lastName:string="";
  mobileNumber:string="";
  address1:string="";
  address2:string="";
  suburb:string="";
  state:string="";
  postCode:string="";

  ngOnInit(): void {
    this.id = this.cus.id;
    this.firstName = this.cus.firstName;
    this.lastName = this.cus.lastName;
    this.mobileNumber = this.cus.mobileNumber;
    this.address1 = this.cus.address1;
    this.address2 = this.cus.address2;
    this.suburb = this.cus.suburb;
    this.state = this.cus.state;
    this.postCode = this.cus.postCode;        
  }

  addCustomer() {
    var val = {
      //id: this.cus.id,
      firstName: this.firstName,
      lastName: this.lastName,
      mobileNumber: this.mobileNumber,
      address1: this.address1,
      address2: this.address2,
      suburb: this.suburb,
      state: this.state,
      postCode: this.postCode
    }

    this.service.addCustomer(val).subscribe(res => {
      alert(res.toString());
    });
  }

  editCustomer() {
    var val = {
      id: this.cus.id,
      firstName: this.firstName,
      lastName: this.lastName,
      mobileNumber: this.mobileNumber,
      address1: this.address1,
      address2: this.address2,
      suburb: this.suburb,
      state: this.state,
      postCode: this.postCode
    }
    
    this.service.updateCustomer(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
