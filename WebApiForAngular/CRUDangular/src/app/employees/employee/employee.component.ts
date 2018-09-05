import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './shared/employee.service';
import { Employee } from './shared/employee.model';
import {NgForm} from '@angular/forms'
import {ToastrService} from 'ngx-toastr'
import { windowToggle } from 'rxjs/operators';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 employees:Employee[];
  constructor(private employeeservice:EmployeeService,private toastr:ToastrService) { }
 
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form !=null)
    form.reset();
    this.employeeservice.SelectedEmployee={
      Empid:null,
      FirstName:"",
      LastName:"",
      EmpCode:null,
      Designation:"",
      Email:"",
      Password:"",
     
    }
  }
  
  onSubmit(form: NgForm) {debugger
    if (form.value.empid == null) {
      this.employeeservice.registeremp(form.value)
       .subscribe(data => {debugger; 
          this.resetForm(form);
          this.employeeservice.getEmpList();
          this.toastr.success('New Record Added Succcessfully', 'Employee Registered');
          
       },error=>this.toastr.error("email already registered!!",'Enter another email id'))
       
    }
    else {debugger
        
      this.employeeservice.PutEmp(form.value.empid, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.employeeservice.getEmpList();
        this.toastr.info('Record Updated Successfully!', 'Employee Updated');
      });
    }
  }
  
}
