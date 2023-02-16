import { Component } from '@angular/core';
import { Empleado } from './quinto.model';

@Component({
  selector: 'app-quinto',
  templateUrl: './quinto.component.html',
  styleUrls: ['./quinto.component.css']
})
export class QuintoComponent {

  empleados:Empleado [] = [
    new Empleado("Juan", "Diaz", "Presidente", 7500), 
    new Empleado("Ana", "Martin", "Directora", 5500), 
    new Empleado("Maria", "Fernandez", "Jefa seccion", 3500),
    new Empleado("Laura", "Lopez", "Administrativo", 2500)
  ]
}
