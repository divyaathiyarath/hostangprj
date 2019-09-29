import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  onSubmit(data:NgForm)
  {
    
   
    console.log("ONSUBMIT"+data.value);
    this.apiService.readMessage(data.value).subscribe((response)=>{
      if(response)
      {
        alert("Successfully inserted");
      }
    });
  }
}
