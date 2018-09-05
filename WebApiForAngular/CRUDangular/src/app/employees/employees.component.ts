import { Component, OnInit } from '@angular/core';
import{EmployeeService} from './employee/shared/employee.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ok } from 'assert';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeservice:EmployeeService, private router:Router ,private toastr:ToastrService) { }

  ngOnInit() {
    
  }
logout(){
  if (confirm('Are you sure you want to logout ?')==true){debugger
    this.router.navigate(['/login'])
      this.toastr.success('Logout Succesfully!!')
    //localStorage.removeItem('employees')
    // if(sessionStorage.length>0){debugger
    //   sessionStorage.clear();
    //   this.router.navigate(['/login'])
    //   this.toastr.success('Logout Succesfully!!')
    // }
    
   
  }

}

}
