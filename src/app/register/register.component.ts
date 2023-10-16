import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../dataservice/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private ds: DataService,private router:Router) {

  }

  //model
  registerform = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],

    gmail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    address: ['']

  })
  ngOnInit(): void {

  }




  register() {
    if (this.registerform.valid) {
      this.ds.registerApi(
        this.registerform.value.name,
        this.registerform.value.psw,
        this.registerform.value.gmail,
        this.registerform.value.phoneNumber,
        this.registerform.value.address
      ).subscribe((result:any)=>{
        alert(result.message)
        // this.router.navigateByUrl("profile")
        this.ds.loginApi(
          this.registerform.value.gmail,
          this.registerform.value.psw).subscribe((result:any)=>{
            alert(result.message)
            // this.router.navigateByUrl("profile")
            console.log(result);
            localStorage.setItem("currentgmail",result.currentGmail)
            localStorage.setItem("currentUser",result.currentUser)
            localStorage.setItem("currentAddress",result.currentAddress)
            localStorage.setItem("currentphone",result.currentphone)
            localStorage.setItem("currentpsw",result.currentpsw)
            this.router.navigateByUrl("profile")
        
          }) })
      
  
     


    }
    
  }
     
      
        

    


  }
  


