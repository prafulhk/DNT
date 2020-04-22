import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentComponent } from './department/department.component';
import { HeaderComponent } from './header/header.component';
import { TodosComponent } from './todos/todos.component';
import { ContainerComponent } from './container/container.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    HeaderComponent,
    TodosComponent,
    ContainerComponent,
    DepartmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
