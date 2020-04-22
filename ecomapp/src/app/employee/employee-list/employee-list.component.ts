import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  emplist:EmployeeModel[]=[
    {
      id: 1,
      name: "Praful",
      email: "praful@gmail.com",
      dob: new Date('19-Feb-1990'),
      salary: 20000

    },
    {
      id: 2,
      name: "Ashwini",
      email: "praful@gmail.com",
      dob: new Date('19-Feb-1990'),
      salary: 20000

    },
    {
      id: 3,
      name: "Prash",
      email: "praful@gmail.com",
      dob: new Date('19-Feb-1990'),
      salary: 20000

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  trackByFn(i:number,emp:EmployeeModel)
  {
    return emp.id
  }
}
