import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import {Employee} from './employee.model';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  SelectedEmployee:Employee;
  employeeList:Employee[];
 rooturl="http://localhost:52639/api/Employees/";
  constructor(private http:Http) { }

 registeremp(user:Employee){debugger
return this.http.post(this.rooturl,user);
 }

 getEmpList(){
   this.http.get(this.rooturl) 
   .map((data:Response)=>{
     return data.json() as Employee[];
   }).toPromise().then(x=>{
     this.employeeList=x;
   })
 }

 PutEmp(id:number,emp){ debugger
  return this.http.put(this.rooturl+id,emp);
   }

   DeleteEmp(id:number){debugger
    return this.http.delete(this.rooturl+id);
   }

  
}
 
