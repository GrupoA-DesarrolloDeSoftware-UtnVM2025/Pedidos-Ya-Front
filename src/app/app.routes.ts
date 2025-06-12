import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component'; // Corregido para usar el componente de Vistas
import { RegisterComponent } from './pages/register/register.component'; // El nuevo componente

export const routes: Routes = [
  // Rutas de autenticación
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Ruta principal de la aplicación (una vez que el usuario ha iniciado sesión)
  {
    path: 'home',
    component: TemplateComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },

  // Redirigir la ruta raíz a la página de login por defecto
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Opcional: Redirigir cualquier ruta no encontrada a login
  { path: '**', redirectTo: '/login' }
];
