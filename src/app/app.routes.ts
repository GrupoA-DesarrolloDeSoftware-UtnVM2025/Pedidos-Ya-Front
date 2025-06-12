import { Routes } from '@angular/router';

import { LoginComponent } from './Vistas/login/login.component';
import { RegisterComponent } from './Vistas/register/register.component';
import { DeliveryComponent } from './Vistas/delivery/delivery.component';
import { HomeComponent } from './Vistas/home/home.component';
// ▼▼▼ 1. IMPORTA EL NUEVO COMPONENTE ▼▼▼
import { DeliveryFormComponent } from './Vistas/nuevo-delivery/nuevo-delivery.component';

export const routes: Routes = [
  // ... (rutas de login y register)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Rutas principales de la aplicación
  { path: 'home', component: HomeComponent },
  { path: 'delivery', component: DeliveryComponent },
  // ▼▼▼ 2. AÑADE LA NUEVA RUTA PARA EL FORMULARIO ▼▼▼
  { path: 'delivery/nuevo', component: DeliveryFormComponent },

  // ... (redirecciones)
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];