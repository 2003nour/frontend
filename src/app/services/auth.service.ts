import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth'; // ✅ URL correcte du backend

  constructor(private http: HttpClient) {}

  // ✅ Inscription d'un utilisateur
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData)
      .pipe(
        catchError(this.handleError) // Gestion des erreurs
      );
  }

  // ✅ Connexion d'un utilisateur
  login(credentials: any): Observable<any> {
    console.log("📡 Tentative de connexion avec :", credentials);

    return this.http.post(`${this.apiUrl}/login`, credentials)
      .pipe(
        catchError(this.handleError) // Gestion des erreurs
      );
  }

  // ✅ Gestion des erreurs HTTP
  private handleError(error: HttpErrorResponse) {
    console.error('❌ Erreur HTTP:', error);
    let errorMessage = 'Une erreur est survenue, veuillez réessayer.';

    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      // Erreur côté serveur
      if (error.status === 400) {
        errorMessage = error.error.message || "Identifiants incorrects.";
      } else if (error.status === 401) {
        errorMessage = "Accès refusé. Veuillez vous reconnecter.";
      } else if (error.status === 404) {
        errorMessage = "Ressource non trouvée.";
      }
    }
    return throwError(() => new Error(errorMessage));
  }
}
