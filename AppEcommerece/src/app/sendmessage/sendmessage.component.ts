import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sendmessage',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './sendmessage.component.html',
  styleUrl: './sendmessage.component.css'
})
export class SendmessageComponent implements OnInit {

  showimage : boolean = true;
  signaldata :any []=[];
  constructor(private httpClient : HttpClient){
  }

  ngOnInit(): void {
    this.showimage = true;
  }

  senddata(){

    var data = {
      Type : 'warning',
      Information :'text information message'
    };

    this.httpClient.get("http://localhost:5001/api/message")
    .subscribe((data :any)=>{
      console.log(data);
      this.signaldata = data;
      this.showimage = false;
    });

  }

  showMessage(){
this.showimage = true;
  }
  
}
