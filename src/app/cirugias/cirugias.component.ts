import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cirugia',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cirugias.component.html',
  styleUrls: ['./cirugias.component.css'],
})
export default class CirugiaComponent {
  cirugiaForm = new FormGroup({
    fechaCirugia: new FormControl(''),
    numCirugia: new FormControl(''),
    numExpediente: new FormControl(''),
    nomPaciente: new FormControl(''),
    apellidoPPaciente: new FormControl(''),
    apellidoMPaciente: new FormControl(''),
    nomCirujano: new FormControl(''),
    nomAnestesiologo: new FormControl(''),
    nomResidente: new FormControl(''),
    nomCirugia: new FormControl(''),
    nomEnfeInt: new FormControl(''),
    nomEnfeCir: new FormControl(''),
    tipoAnes: new FormControl(''),
    iniciaAnes: new FormControl(''),
    finAnes: new FormControl(''),
    medicamento: new FormControl(''),
    suturas: new FormControl(''),
    material: new FormControl(''),
    validCheck: new FormControl(false),
    
  });

  onSubmit() {
    console.log(this.cirugiaForm.value);
  }

  ConfirmarDatos() {
    if (this.cirugiaForm.valid) {
      console.log('Datos del formulario:', this.cirugiaForm.value);
      alert('Formulario guardado correctamente!');
    } else {
      alert('El formulario no es válido. Por favor, rellena todos los campos requeridos.');
    }
  }
}
