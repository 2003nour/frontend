import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  // ✅ Page d'accueil sans layout
  { path: '', loadComponent: () => import('./acceuil/acceuil.component').then(m => m.AccueilComponent) },

  // ✅ Pages protégées avec layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'trainings', loadComponent: () => import('./training/training.component').then(m => m.TrainingComponent) },
      { path: 'parametres', loadComponent: () => import('./parametres/parametres.component').then(m => m.ParametresComponent) },
      { path: 'messages', loadComponent: () => import('./messages/messages.component').then(m => m.MessagesComponent) },

      { path: 'stats', loadComponent: () => import('./stats/stats.component').then(m => m.StatsComponent) },
      { path: 'forum', loadComponent: () => import('./forum/forum.component').then(m => m.ForumComponent) },
      { path: 'challenges', loadComponent: () => import('./challenges/challenges.component').then(m => m.ChallengesComponent) },
      { path: 'logout', redirectTo: '/connexion', pathMatch: 'full' }
    ]
  },

  // ✅ Pages hors layout
  { path: 'connexion', loadComponent: () => import('./connexion/connexion.component').then(m => m.ConnexionComponent) },
  { path: 'inscription', loadComponent: () => import('./inscription/inscription.component').then(m => m.InscriptionComponent) },

  // ✅ Redirection inconnue
  { path: '**', redirectTo: '' }
];
