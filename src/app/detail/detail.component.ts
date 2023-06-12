import { Component,Input } from '@angular/core';
import { ConfigService } from '../config/config.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  students:any;
  @Input() public id:string;
  studentdetail:any;
  constructor(private service:ConfigService){ 
  }
  ngOnInit(){
    this.service.getStudenDetail(this.id)
      .subscribe(response => {
        this.studentdetail = response;      
    })   
  }
}
