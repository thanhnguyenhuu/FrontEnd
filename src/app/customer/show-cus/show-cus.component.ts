import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cus',
  templateUrl: './show-cus.component.html',
  styleUrls: ['./show-cus.component.css']
})
export class ShowCusComponent implements OnInit {

  constructor(private service:SharedService) { }

  CustomerList:any=[];

  ModalTitle:string="";
  ActivateAddEditCusComp:boolean=false;
  cus:any;

  ngOnInit(): void {
    this.refreshCustList();
  }

  addClick() {    
    this.cus = {
      id: 0,
      firstName: "",
      lastName: "",
      mobileNumber: "",
      address1: "",
      address2: "",
      suburb: "",
      state: "",
      postCode: ""
    }
    this.ModalTitle = "Add Customer";
    this.ActivateAddEditCusComp = true;    
  }

  editClick(item:any) {
    this.cus = item;
    this.ModalTitle = "Edit Customer";
    this.ActivateAddEditCusComp = true;
  }

  deleteClick(item:any) {
    if (confirm('Are you sure?')) {
      this.service.deleteCustomer(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshCustList();
      });
    }
  }

  closeClick() {    
    this.ActivateAddEditCusComp = false;
    this.refreshCustList();    
  }

  refreshCustList() {
    this.service.getCustList().subscribe(data => {
      this.CustomerList = data;
    });
  }
}
