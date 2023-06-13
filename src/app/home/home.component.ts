import { Component } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { DialogRef, DialogService } from "@progress/kendo-angular-dialog";
import { DetailComponent } from '../detail/detail.component';
import { SortDescriptor,orderBy } from '@progress/kendo-data-query';
import { StudentModel } from '../model/student.model';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public gridData = new Array();

  constructor(
    private service:ConfigService,
    private dialogService: DialogService,
    private route:ActivatedRoute
    ) { }

  
   //load studenlist & map to student model
    ngOnInit() {
      console.log(Number(this.route.snapshot.paramMap.get('id')));
      this.service.getStudents()
      .subscribe(response => {
          if(response){
              response.forEach((student:any) => {
              this.gridData.push(this.service.mapData(student))
            });
          }        
      })
    }   
   //Show detail information dialog
   public showdetailDialog(arg:any): void {
      const dialogRef: DialogRef = this.dialogService.open({
        title: "Detail Information",
        content: DetailComponent,
      });
      const userInfo = dialogRef.content.instance as DetailComponent;
      userInfo.id = arg.selectedRows[0].dataItem.id.toString();
    }

  //Sort & loadproduct for sort binding
  public sort: SortDescriptor[] = [
    {
      field: "name",
      dir: "desc",
    },
  ];

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }
  private loadProducts(): void {
    let orderData = {
      data: orderBy(this.gridData, this.sort),
      total: this.gridData.length,
    };
  }
 

 
}
