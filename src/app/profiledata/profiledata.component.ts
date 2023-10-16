import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-profiledata',
  templateUrl: './profiledata.component.html',
  styleUrls: ['./profiledata.component.css']
})
export class ProfiledataComponent implements OnInit {

@Input()  datachild:string|undefined 

gmail:any
psw:any
transaction:any

  constructor( private ds:DataService){

  }

  ngOnInit(): void {
    this.gmail=localStorage.getItem("currentgmail")
    this.psw=localStorage.getItem("currentpsw")

    this.ds.orderHistory(this.gmail).subscribe((result:any)=>{
      this.transaction=result.message
      console.log(this.transaction);
      
    })

  }

}
