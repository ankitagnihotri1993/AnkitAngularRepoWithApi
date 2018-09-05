import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable()
export class AuthenticationService {
    private loginurl="http://localhost:52639/api/Login/"
    constructor(private http: HttpClient) { }

    registeremp(user:NgForm){
     return this.http.post(this.loginurl,user);
 }

    
}