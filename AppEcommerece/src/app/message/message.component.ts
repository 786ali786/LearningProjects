import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

import * as SignalR from '@aspnet/signalr';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit {

  private _hubConnection : HubConnection;
  showimage : boolean = true;
  signaldata : any []=[];

  constructor(){}

  ngOnInit(): void {

    this._hubConnection = new HubConnectionBuilder()
    .withUrl('http://localhost:5001/notifyHub',{

          skipNegotiation :true,
          transport : SignalR.HttpTransportType.WebSockets
      

    }).build();

    this._hubConnection.start()
    .then(()=>{
      console.log('Connection Start!')
    }).catch(error=>{
      console.log('Error while Establishing the connection')
    });

    this._hubConnection
    .on('BroadcastMessage',(message)=>{
      this.signaldata.push(message);
      console.log(message);
      this.showimage = true;
    });

  }

  ShowMessages(){
    
    this.showimage = false;
  }

 
}
