import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { LoginService } from '../employees/employee/shared/login.service';
import { EmployeeService } from '../employees/employee/shared/employee.service';
import {ToastrService} from 'ngx-toastr';
import { Login } from '../employees/employee/shared/login.model';
import{first, find} from 'rxjs/operators';
import {Router ,RouterModule,Routes,CanActivate} from '@angular/router';
import { EmployeesComponent } from '../employees/employees.component';
//import { request } from 'http';
import { ResponseOptions } from '@angular/http';
import { ok } from 'assert';

const route:Routes=[  {path:'employees', component:EmployeesComponent},]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //rooturl="http://localhost:52639/api/Login/";
selectedlogin :Login;
public b:string
 
  constructor(private responseOptions: ResponseOptions, private loginservices:LoginService,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
   this.selectedlogin = new Login;
  }

  
  
  onSubmitLogin(form:NgForm){debugger
    if (form.value!= null) {debugger
      this.loginservices.registeremp(form.value)
      .pipe(first())
      .subscribe( 
        data => { if(ok(data)){debugger 
        }
        this.router.navigate(['/employees'])
        this.toastr.success('Logged in successfully')             
        },     error => {console.log(error)
          this.toastr.error('Login Failed please enter correct email and password '+error);
          //this.loading = false;
      });
     
      
      
    }
   
  }
}

