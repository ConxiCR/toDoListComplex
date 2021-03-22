import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrTareas: Tarea[];
  constructor(){
    this.arrTareas = [];
  }
  onTareaCreada($event){
    //dentro del padre recibo las tareas que se realicen en el formulario
    this.arrTareas.push($event);
    //console.log($event);
  }
}
