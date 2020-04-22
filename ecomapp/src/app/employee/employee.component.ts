import { Component, OnInit, AfterViewInit, ViewChildren, ViewChild, QueryList, ElementRef } from '@angular/core';
import { EmployeeModel } from './employee.model';
import { HeaderComponent } from '../header/header.component';
;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,AfterViewInit {
  // @ViewChild(HeaderComponent, { static: true }) header: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildren: QueryList<HeaderComponent>;

  @ViewChild(HeaderComponent) header: HeaderComponent;

  @ViewChild('errorDiv', { static: true }) errorDiv: ElementRef;



  isHidden: boolean = false;
  name = "Praful"

  employee: EmployeeModel =
    {
      id: 123,
      name: "praful",
      email: "praful@gmail.com",
      dob: new Date('19-Feb-1990'),
      salary: 20000

    }
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.isHidden = !this.isHidden;
  }

  ngAfterViewInit(): void {
    console.log(this.headerChildren);
    // console.log(this.header);
    // this.header.title = 'Employee';
    // this.errorDiv.nativeElement.innerText = 'Some error';
    this.headerChildren.forEach((header)=> {
      header.title = 'New Employee';
    });
  }
  

}
