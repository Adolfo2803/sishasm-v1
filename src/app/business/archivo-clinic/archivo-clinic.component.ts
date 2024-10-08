import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-archivo-clinic',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet],
  templateUrl: './archivo-clinic.component.html',
  styleUrl: './archivo-clinic.component.css'
})
export default class ArchivoClinicComponent {
form = new FormGroup
  ({
    expediente: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    paterno: new FormControl('', Validators.required),
    materno: new FormControl('', Validators.required),
    fecha_elab: new FormControl('', Validators.required),
    elabora_name: new FormControl('', Validators.required),
    matricula: new FormControl('', Validators.required),
  })
  Guardar(){
    console.log(this.form);
  }
constructor(){
}

};
