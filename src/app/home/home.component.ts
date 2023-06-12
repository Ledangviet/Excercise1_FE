import { Component } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { DialogRef, DialogService } from "@progress/kendo-angular-dialog";
import { DetailComponent } from '../detail/detail.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  students: any;
  studentdetail:any;
  constructor(private service:ConfigService,private dialogService: DialogService) {  
  }
  //fetch studenlist when init component
  ngOnInit() {
    this.service.getStudents()
     .subscribe(response => {
          this.students = response;
      })
  } 
  

  //Show detail information dialog
  public showdetailDialog(arg:any): void {
    const dialogRef: DialogRef = this.dialogService.open({
      title: "Student Information",
      // Show component
      content: DetailComponent,
    });
    const userInfo = dialogRef.content.instance as DetailComponent;
    userInfo.id = arg.selectedRows[0].dataItem.id.toString();
  }
}
