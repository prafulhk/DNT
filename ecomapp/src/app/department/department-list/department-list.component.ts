import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { DepartmentModel } from '../department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  @Input() departmentList: DepartmentModel[] = [];

  @Input() title: string;

  @Output() selectDepartment = new EventEmitter<DepartmentModel>();
  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('on init');
  }

  sendToParent(department: DepartmentModel): void {
    console.log(department);
    this.selectDepartment.emit(department);
  }
}
