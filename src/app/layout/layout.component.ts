import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  menuItems = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Entraînements', route: '/trainings' },
    { label: 'Statistiques', route: '/stats' },
    { label: 'Forum', route: '/forum' },
    { label: 'Défis', route: '/challenges' }
  ];

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token'); // Supprimer le token JWT
    this.router.navigate(['/connexion']); // Rediriger vers la connexion
  }
}
