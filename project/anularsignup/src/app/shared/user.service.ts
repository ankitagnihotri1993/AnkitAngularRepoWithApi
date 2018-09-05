import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Response} from '@angular/http'
import {observable} from 'rxjs'
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class UserService {
readonly url='http://localhost:52639/api/Employees'
  constructor() { }
}
