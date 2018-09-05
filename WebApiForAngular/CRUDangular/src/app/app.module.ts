import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {ToastrModule} from 'ngx-toastr'
import {RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './employees/employee/shared/employee.service';
import { LoginComponent } from './login/login.component';

const approutes:Routes=[
  
 {path:'login', component:LoginComponent},
  {path:'employees', component:EmployeesComponent},
  // {path:'', redirectTo:'/login', pathMatch:'full'},
  // {path:'**', redirectTo:'/login', pathMatch:'full'},
  {path:'employee', component:EmployeeComponent,children:[
    {path:'employee-list', component:EmployeeListComponent}
  ]}
   //{path:'employee-list', component:EmployeeListComponent},
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,HttpModule,ToastrModule.forRoot(),RouterModule.forRoot(approutes,{useHash:true})
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
