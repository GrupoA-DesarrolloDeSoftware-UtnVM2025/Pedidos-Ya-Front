import { Component } from '@angular/core';
// Es posible que tengas 'RouterOutlet' aquí, déjalo si está.
// import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Vistas/login/login.component'; // <-- 1. IMPORTAS EL COMPONENTE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent], // <-- 2. LO AÑADES A LA LISTA DE IMPORTS
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pedidos-ya';
}
