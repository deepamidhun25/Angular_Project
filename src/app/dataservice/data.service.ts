import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

//register api
registerApi(name:any,psw:any,gmail:any,phoneNumber:any,address:any){

const body={
  name,
  psw,
  gmail,
  phoneNumber,
  address
}
 return this.http.post('http://localhost:3000/register1',body)
   
}

//ORDER Api
orderApi(psw:any,gmail:any,amount:any,orderDate:any,deliveryDate:any,Status:any){
  const body={
    psw,
    gmail,
    amount,
    orderDate,
    deliveryDate,
    Status

  }
  return this.http.post('http://localhost:3000/orderdetails',body)
}




//login api

loginApi(gmail:any,psw:any){
const body={
  gmail,
  psw

}
return this.http.post('http://localhost:3000/login',body)

}

//delete api
DeleteApi(gmail:any,psw:any){
  const body={
    gmail,
    psw
  
  }
  return this.http.post('http://localhost:3000/delete',body)
  
  }

  //orderlist
  orderHistory(gmail:any){
  return this.http.get('http://localhost:3000/transaction/'+gmail)
  }





}
