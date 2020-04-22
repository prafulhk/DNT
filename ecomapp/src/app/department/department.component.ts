import { Component, OnInit, Self } from '@angular/core';
import { DepartmentService } from './Services/department.service';
import { DepartmentModel } from './department.model';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentService]
})
export class DepartmentComponent implements OnInit {

  
  deptList: DepartmentModel[] = [];

  selectedDepartment: DepartmentModel;

  // deptService = new DepartmentService();

  constructor(@Self() private deptService: DepartmentService) { }

  ngOnInit(): void {
    this.deptList = this.deptService.getDepartments();
    console.log(this.deptList);
    // this.deptList = [
    //   { id: 1, name: 'Admin', hod: 'Test', empCount: 100 },
    //   { id: 2, name: 'Marketing', hod: 'Test1', empCount: 200 },
    //   { id: 3, name: 'IT', hod: 'Test2', empCount: 400 }
    // ];

  }

  addDepartment() {
    const department = { id: 4, name: 'DevOps', hod: 'Test3', count: 20 };
    this.deptList = this.deptService.addDepartment(department);
    // this.deptList.push({ id: 4, name: 'DevOps', hod: 'Test3', empCount: 20 });
  }

  receiveFromChild(dept: DepartmentModel) {
    this.selectedDepartment = dept;
  }

}
