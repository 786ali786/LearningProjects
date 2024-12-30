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
  .withUrl('https://localhost:5001/toastr',{
    
    skipNegotiation :true,
    transport : SignalR.HttpTransportType.WebSockets

  }).build();

  connection.start().then(()=>{
    console.log('Hub Connection Started!');
  }).catch((error : any )=>{

    console.log('Error While starting Connection:' + error);

  });
}

}

