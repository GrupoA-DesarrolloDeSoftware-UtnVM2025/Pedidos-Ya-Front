import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// ▼▼▼ ¡ASEGÚRATE DE TENER ESTAS DOS LÍNEAS! ▼▼▼
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { GlobalStatusService } from '../../services/global-status.service';

@Component({
  selector: 'app-home',
  standalone: true,
  // ▼▼▼ Y QUE LOS MÓDULOS ESTÉN EN EL ARRAY DE IMPORTS ▼▼▼
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<{ image: string; name: string; description: string }> = [];
  constructor(
    private readonly apiService: ApiService,
    private readonly globalStatusService: GlobalStatusService
  ) {}
  ngOnInit(): void {
    this.initialization();
  }

  async initialization(): Promise<void> {
    // El resto de tu código no necesita cambios...
    this.globalStatusService.setLoading(true);
    const data = await this.apiService.getData();
    this.items = data;
    this.globalStatusService.setLoading(false);
  }
}