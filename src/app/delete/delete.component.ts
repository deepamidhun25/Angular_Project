import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../dataservice/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  implements OnInit{

  @Input() deleteChild:string|undefined

  constructor(private fb: FormBuilder, private ds: DataService,private router:Router){}

//model
deleteform=this.fb.group({
  gmail:[''], 
   psw:[''],
})



  ngOnInit(): void {
    this.deleteform.value.gmail=localStorage.getItem("currentgmail")
    this.deleteform.value.psw=localStorage.getItem("currentpsw")
  }

  DeleteAccount()
{
console.log(this.deleteform.value.gmail);
console.log(this.deleteform.value.psw);
this.ds.DeleteApi(
  this.deleteform.value.gmail,this.deleteform.value.psw).subscribe((result:any)=>{
    alert(result.message)
    this.router.navigateByUrl('');
    
  },
  result=>{
    alert(result.error.message)
  }
  )



}
}
