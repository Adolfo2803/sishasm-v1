import { Injectable } from '@angular/core';
import Paciente from '../interfaces/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  pacientes: Paciente[];

  constructor() {
    this.pacientes= 
      [{
        expediente: 2484081301,
      nombre: "juan",
      paterno: "Perez",
      materno: "leon",
      fecha_elab: "23-09-2024",
      elabora_name: "Martin",
      matricula: "2345566789"
        },
      {
        expediente: 2484081301,
      nombre: "Pedro",
      paterno: "Perez",
      materno: "leon",
      fecha_elab: "23-09-2024",
      elabora_name: "Martin",
      matricula: "2345566789"
        },
    ]
           
   }


agregarPaciente(paciente: Paciente){
  this.pacientes.push(paciente);

}


}
