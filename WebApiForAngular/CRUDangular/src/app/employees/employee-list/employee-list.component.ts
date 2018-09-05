import { Component, OnInit } from '@angular/core';
import  {EmployeeService} from '../employee/shared/employee.service';
import{Employee} from '../employee/shared/employee.model'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees:Employee[];

  constructor(private employeeservice:EmployeeService,private toastr:ToastrService) { }

  ngOnInit() {
    this.employeeservice.getEmpList();
  }
showforedit(emp:Employee){debugger 
this.employeeservice.SelectedEmployee=Object.assign({},emp);
}
onDelete(id:number){debugger;
  if(confirm('Are you sure you want to delete ?')==true){debugger;
this.employeeservice.DeleteEmp(id)
.subscribe(x=>{debugger;
this.employeeservice.getEmpList();
   this.toastr.warning('Deleted successfully!!');
 })
   }

}
}