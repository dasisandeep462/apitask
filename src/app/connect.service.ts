import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Class } from './class';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ConnectService {



  private url:string="http://localhost:8000/travelRequests";

  constructor(private http:HttpClient) { }
  getTask():Observable<Class[]>{
    return this.http.get<Class[]>(this.url)
  }
}
