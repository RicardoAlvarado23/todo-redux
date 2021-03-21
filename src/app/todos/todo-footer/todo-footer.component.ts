import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { filtrar, filtrosVarios } from '../../filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtrosVarios = 'todos';

  filtros: filtrosVarios[] = ['todos', 'pendientes', 'completados'];
  pendientes: number= 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    /* this.store.select('filtro').subscribe((filtro) => {
      this.filtroActual = filtro;
    }); */
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter((todo) => !todo.completado).length;

    })
  }

  cambiarFiltro(filtro: filtrosVarios) {
    this.store.dispatch(filtrar({filtro}));
  }

  limpiarCompletados() {
    this.store.dispatch(limpiarCompletados());
  }

  obtenerNombrePendientes() {
    return this.pendientes == 1 ? 'Tarea Pendiente': 'Tareas Pendientes';
  }

}
