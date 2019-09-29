import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  readMessage(data){
    
   // console.log(data);
    return this.http.post("https://hostang.herokuapp.com/readMsgApi",data);

  }
  getMessage()
  {
   // console.log("apiservice");
    return this.http.get("https://hostang.herokuapp.com/getDataApi");
  }
}
