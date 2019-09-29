import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-viewmessage',
  templateUrl: './viewmessage.component.html',
  styleUrls: ['./viewmessage.component.css']
})
export class ViewmessageComponent implements OnInit {

  myData:Array<object>=[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getData();
  }
   
  getData()
  {
    this.apiService.getMessage().subscribe((response:Array<object>)=>{
      if(response)
      {
        this.myData=response;
      console.log(this.myData[0]);
      }
    })
  }
}
