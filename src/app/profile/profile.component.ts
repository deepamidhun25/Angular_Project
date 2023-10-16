import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{

user:any
gmail:any
phonenumber:any
address:any
dataparent:any
deleteParent:any

constructor(private rout:Router){

}
ngOnInit(): void {
  this.user=localStorage.getItem("currentUser")
  this.gmail=localStorage.getItem("currentgmail")
  this.address=localStorage.getItem("currentAddress")
  this.phonenumber=localStorage.getItem("currentphone")


}
SignOut(){
  alert("profile Sign Out")
  this.rout.navigateByUrl('')

}
orderNow(){

  this.clearorder()
  this.dataparent=this.user
 
  
}
delete()
{
  this.cleardelete()

  this.deleteParent=this.user
}
cleardelete(){
  this.dataparent=null
}
clearorder(){
  this.deleteParent=null
}

}
