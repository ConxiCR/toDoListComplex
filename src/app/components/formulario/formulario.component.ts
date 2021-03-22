import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() tareaCeada: EventEmitter<Tarea>;

  nuevaTarea: Tarea;

  constructor() { 
    this.nuevaTarea = new Tarea();
    this.tareaCeada = new EventEmitter();
  }

  ngOnInit(): void {
  }
  onClick(){
    this.tareaCeada.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea();
  }
}
