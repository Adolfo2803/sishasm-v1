import { Injectable } from '@angular/core';
import Userclinic from '../interfaces/Userclinic';

@Injectable({
  providedIn: 'root'
})
export class UserclinicService {
  usuario: Userclinic;

  constructor() {
    this.usuario = {
      name: "Alexis",
      apellido: "gomez",
      email:"alex@gmail.com",
      password: "sssss"
    }
  

}
}
