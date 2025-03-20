import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },  // ✅ Route connexion
  { path: 'inscription', component: InscriptionComponent }, // ✅ Route inscription
  { path: '', redirectTo: '/connexion', pathMatch: 'full' } // Redirection par défaut
];
