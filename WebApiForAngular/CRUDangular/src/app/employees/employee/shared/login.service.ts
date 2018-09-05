import { Injectable } from '@angular/core';
import { Login } from './Login.model';
import{EmployeeService} from './employee.service'
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  selectedlogin:Login;
  LoginList:Login[];
  rooturl="http://localhost:51773/api/login/";
  constructor(private http:Http,) { }


  registeremp(user:Login){debugger
    return this.http.post(this.rooturl,user)
     }
    
     getEmpList(){
       this.http.get(this.rooturl) 
       .map((data:Response)=>{
         return data.json() as Login[];
       }).toPromise().then(x=>{
         this.LoginList=x;
       })
     }
    
     PutEmp(id:number,emp){ debugger
      return this.http.put(this.rooturl+id,emp);
       }
    
       DeleteEmp(id:number){debugger
        return this.http.delete(this.rooturl+id);
       }
    
}
