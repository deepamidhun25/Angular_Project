import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  constructor(private rout:Router,private fb:FormBuilder,private ds:DataService){ 

  }

  //model
  loginform=this.fb.group({
    gmail:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]

  })

  ngOnInit(): void {
    
  }



  login(){
    
    if(this.loginform.valid)
    {
        
      this.ds.loginApi(
        this.loginform.value.gmail,
        this.loginform.value.psw).subscribe((result:any)=>{
          alert(result.message)
          this.rout.navigateByUrl("profile")
          console.log(result);
          localStorage.setItem("currentgmail",result.currentGmail)
          localStorage.setItem("currentUser",result.currentUser)
          localStorage.setItem("currentAddress",result.currentAddress)
          localStorage.setItem("currentphone",result.currentphone)
          localStorage.setItem("currentpsw",result.currentpsw)
        },
        result=>{
          alert(result.error.message);
        }
          )
        }
        
    }
    
  }
 


