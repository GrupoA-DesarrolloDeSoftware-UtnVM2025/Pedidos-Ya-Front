import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {config} from '../../config/env';
import axios from 'axios'; // Importa RouterLink para la navegación

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // Añade RouterLink a los imports
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Variable para controlar si la contraseña se muestra o no
  showPassword = false;

  constructor(private router: Router) { }

  // Función para alternar la visibilidad de la contraseña
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Función que se ejecuta al enviar el formulario
  crearCuenta(): void {
    // Aquí irá la lógica para registrar al usuario
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    axios.post(config.urls.postRegister, {
      email,
      password
    })
      .then(res => {
        console.log('Registro exitoso:', res.data);
        this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
      })
      .catch(err => {
        console.error('Error al registrar:', err);
      })
  }
}
