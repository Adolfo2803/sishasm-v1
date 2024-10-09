import { Injectable } from '@angular/core';
import User from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user: User;
 
  constructor() {
        this.user = {
      name: "Adolfo",
    mail:"correo@gmail.com",
password:"****"

    }

   }

   setUser(name: User){
    this.user = name;
   }

   

}
