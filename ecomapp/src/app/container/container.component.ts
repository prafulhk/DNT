import { Component, OnInit, AfterContentInit, ContentChild, ContentChildren, QueryList, Host } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';
import { DepartmentService } from '../department/Services/department.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers : [DepartmentService]
})
export class ContainerComponent implements OnInit,AfterContentInit {

  @ContentChild(DepartmentComponent) contentChild: DepartmentComponent;
  @ContentChildren(DepartmentComponent) contentChildren: QueryList<DepartmentComponent>;

  constructor(@Host() private deptService: DepartmentService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    // console.log(this.contentChild);
    console.log(this.contentChildren);
    // this.contentChild.addDepartment();
  }

}
