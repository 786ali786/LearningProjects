import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private productsService : ProductsService){

  }

  ngOnInit(): void {
    
    this.productsService.
    getProducts("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients",{page:0,perPage:4})
    .subscribe((products : any)=>{
     console.log(products);

    });
  }

}
