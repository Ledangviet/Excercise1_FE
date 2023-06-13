import { Component,Input } from '@angular/core';
import { ConfigService } from '../config/config.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() public id:string;
  public studentDetail:any;
  constructor(private service:ConfigService){ 
  }
  ngOnInit(){
    this.service.getStudenDetail(this.id)
      .subscribe(response => {
        this.studentDetail = response;      
    })   
  }
}
