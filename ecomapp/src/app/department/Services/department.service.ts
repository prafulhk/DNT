import { Injectable } from '@angular/core';
import { DepartmentModel } from '../department.model';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  deptList: DepartmentModel[] = [];

  constructor() { }
  getDepartments(): DepartmentModel[] {
    return this.deptList = [
      { id: 1, name: "Angular", hod: "Test1", count: 100 },
      { id: 2, name: "Python", hod: "Test2", count: 500 },
      { id: 3, name: "Java", hod: "Test3", count: 1000 },

    ]
  }

  addDepartment(department: DepartmentModel) {
    // this.deptList = [...this.deptList, { id: 4, name: "Devops", hod: "Test4", count: 5000 }]


    this.deptList.push({ id: 4, name: 'DevOps', hod: 'Test3', count: 20 });
    return this.deptList;
  }
}
