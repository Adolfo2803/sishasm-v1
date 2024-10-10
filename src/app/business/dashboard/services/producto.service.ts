import { Injectable } from '@angular/core';
import Producto from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 
  producto: Producto;

  constructor() {
    this.producto = {
      name: "Mesa Oficina",
      price: 45.7
    }
   
   }
}
