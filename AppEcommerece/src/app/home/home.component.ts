import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { SignalrService } from '../services/signalr.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private productsService : ProductsService, private signalR : SignalrService){

  }

  ngOnInit(): void {
    
    this.signalR.startConnection();

    setTimeout(() => {
      this.signalR.askServerListener();
      this.signalR.askServer();
    }, 2000);

    // this.productsService.
    // getProducts("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients",{page:0,perPage:4})
    // .subscribe((products : any)=>{
    //  console.log(products);
    // });

  }
  
  ngOnDestroy() {
    this.signalR.hubConnection.off("askServerResponse");
  }

}
