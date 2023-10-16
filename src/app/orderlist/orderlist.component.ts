import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit{

gmail:any
psw:any

constructor( private ds:DataService){}

ngOnInit(): void {
  
}

}
