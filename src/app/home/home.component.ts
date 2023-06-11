import { Component } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Student } from '../model/student.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  students: any;
  studentdetail:any;
  detailopen = false;
  
  constructor(private service:ConfigService) {  
  }

  //fetch studenlist when init component
  ngOnInit() {
    this.service.getStudents()
     .subscribe(response => {
          this.students = response;
      })
  } 
  
  //close dialog function
  close(){
    this.detailopen = false;
  }

  //Fetch and popup detail information when click to the Row data
  public onchangeClick(arg:any) {
    this.service.getStudenDetail(arg.selectedRows[0].dataItem.id.toString())
      .subscribe(response => {
        this.studentdetail = response;
    }) 
    this.detailopen = true;
  }

  id = '1';

}
