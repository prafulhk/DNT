import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/employee.model';
;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
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

}
