import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,  // <-- Tu componente DEBE tener esta línea si no hay app.module
  imports: [CommonModule], // <-- AÑADE ESTA LÍNEA AQUÍ
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Variable para controlar si la contraseña se muestra o no
  showPassword = false;

  constructor() { }

  // Función que se llama al hacer clic en el ícono del ojo
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Función que se ejecuta al enviar el formulario
  iniciarSesion(): void {
    // Por ahora, solo mostraremos un mensaje en la consola.
    // Aquí es donde harías la llamada a tu API para validar el usuario.
    console.log("Intentando iniciar sesión...");
    // event.preventDefault(); // Si no usas formularios de Angular, previene el refresco.
  }
}
