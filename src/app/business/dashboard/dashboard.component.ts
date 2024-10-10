import { Component } from '@angular/core';
import { PatientService } from './services/patient.service';
import { UserService } from './services/user.service';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

constructor(public produService: ProductoService,public userService:UserService){ }




}
