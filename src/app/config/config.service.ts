import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { StudentModel } from '../model/student.model';

@Injectable({
    providedIn: 'root'
  })
export class ConfigService {
  private url = 'https://localhost:7110/api/Student';
  constructor(private http: HttpClient) { }
  
  
  public mapData(student:any): StudentModel { 
    let studentmodel = new StudentModel();
    studentmodel.id = student.id;
    studentmodel.name = student.name;
    const [month, day, year] = student.birthDay.split('/');
    studentmodel.birthDay = new Date(+year, +month - 1, +day);
    studentmodel.adress = student.adress;
    studentmodel.description = student.description;
    studentmodel.gender = student.gender; 
    return studentmodel;
  }

  public getStudents(): Observable<any>{ 
    return this.http.get(this.url);
  }
  public getStudenDetail(id:string): Observable<any>{
    return this.http.get(this.url+'/id?id='+id)
  }
}