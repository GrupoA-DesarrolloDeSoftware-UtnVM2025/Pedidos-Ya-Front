import { Routes } from '@angular/router';

// Asumimos que todos los componentes están en la carpeta Vistas
import { LoginComponent } from './Vistas/login/login.component';
import { RegisterComponent } from './Vistas/register/register.component';
import { DeliveryComponent } from './Vistas/delivery/delivery.component';
import { HomeComponent } from './Vistas/home/home.component'; // Asegúrate de que este componente exista en esta ruta

export const routes: Routes = [
  // Rutas de autenticación
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Rutas principales de la aplicación
  { path: 'home', component: HomeComponent },
  { path: 'delivery', component: DeliveryComponent },

  // Redirecciones
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];