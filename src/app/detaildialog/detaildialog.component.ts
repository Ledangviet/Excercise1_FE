import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-detaildialog', 
  templateUrl: './detaildialog.component.html',
  styleUrls: ['./detaildialog.component.scss']
})
export class DetaildialogComponent {

  @Input() id = '';
  @Input() dialogopen = false;
  @Input() studentdetail:any;
}
