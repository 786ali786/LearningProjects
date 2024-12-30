import { Injectable, signal } from '@angular/core';
import * as SignalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  constructor() { 
  }

  
hubConnection:SignalR.HubConnection;

startConnection = () => {


  const connection = new SignalR.HubConnectionBuilder()
  .withUrl('http://localhost:5001/api/home/GetHubMessages',{
    
    skipNegotiation :true,
    transport : SignalR.HttpTransportType.WebSockets

  }).build();

  connection.start().then(()=>{
    console.log('Hub Connection Started!');
  }).catch((error : any )=>{

    console.log('Error While starting Connection:' + error);

  });
}

askServer(){
  this.hubConnection.invoke("askServer","hey")
      .catch(err => console.log(err));
}

askServerListener(){
  this.hubConnection.on("askServerResponse",(someText)=>{
    console.log(someText);
  });
}

}

