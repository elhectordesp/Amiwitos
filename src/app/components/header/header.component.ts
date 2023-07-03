import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // Variables del componente
  iconoSeleccionado: string = 'inicio';

  seleccionarPestanya(icono: string) {
    this.iconoSeleccionado = icono;
  }

  // Ejemplo metodos
  /*metodo(parametros) {
    desarrollo metodo
  }*/
}
