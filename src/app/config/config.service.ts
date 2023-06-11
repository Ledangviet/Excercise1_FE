import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class ConfigService {
  private url = 'https://localhost:7110/api/Student';

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get(this.url);
  }
  getStudenDetail(id:string){
    return this.http.get(this.url+'/id?id='+id)
  }
}