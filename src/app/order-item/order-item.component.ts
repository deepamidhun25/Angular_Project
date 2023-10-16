import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit{
check:any
dryrate:any
drynumber:any=0
check2:any
laundryRate:any
launNumber:any=0
laundryIronrate:any
laundryIronNumber:any=0
check3:any
 PickUpdate:any
 deliveryDate:any
 amount:any=0
 check4:any
 gmail:any
 psw:any
 status:any="unpaid"
 amountStr:any

   constructor(private ds:DataService,private rout:Router,private fb:FormBuilder){}
   
  
   
   
   
   ngOnInit(): void {
    this.gmail=localStorage.getItem("currentgmail")
     this.psw=localStorage.getItem("currentpsw")
   }
   
   display = "none";
   submit(){
    if(this.check=true){
      this.dryrate=25
      // console.log(this.dryrate);
      // console.log(this.drynumber);
      }
      if(this.check2=true){
        this.laundryRate=79
        // console.log(this.laundryRate);
        // console.log(this.launNumber);
        }
        if(this.check3=true){
          this.laundryIronrate=109
          // console.log(this.laundryIronrate);
          // console.log(this.laundryIronNumber);
          
        }
        // console.log(this.PickUpdate);
        // console.log(add(this.PickUpdate,3));
        // const date = new Date(this.PickUpdate);
      // console.log( date.setDate(date.getDate() + 3));
      var d = new Date(this.PickUpdate);
d.setDate(d.getDate() + 5)
// console.log(d);
this.deliveryDate=d.toDateString()
this.amount=((this.drynumber*this.dryrate)+(this.laundryIronNumber*this.laundryIronrate)+(this.launNumber*this.laundryRate))
// console.log(this.amount);
// let num=this.amount
// this.amountStr=num.ToString()

        
        
    }
//     
openModal() {
  this.display = "block";
}
onCloseHandled() {
  this.display = "none";
}



confirmOrder(){
  this.status="Paid"
 
  if(this.amount!=0){
    this.ds.orderApi(
    this.psw,
    this.gmail,
    this.amount,
    this.PickUpdate,
    this.deliveryDate,
    this.status
).subscribe((result:any)=>{
  alert(result.message)
  alert("order Confirmed")
  console.log(result);
  this.rout.navigateByUrl("profile")

},
result=>{
  alert(result.error.message);
  this.rout.navigateByUrl("profile")
}
)
}
else{
  alert("please select any order")
  this.rout.navigateByUrl('/profile')

}



}
   
   }


