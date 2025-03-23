import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parametres',
  standalone: true,
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css'],
  imports: [CommonModule, ReactiveFormsModule] // ✅ ici
})
export class ParametresComponent {
  form: FormGroup;
  message = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      age: ['', [Validators.required, Validators.min(1)]],
      taille: ['', [Validators.required, Validators.min(50)]],
      sexe: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("✅ Formulaire soumis !");
    console.log("Données du formulaire :", this.form.value);
    const token = localStorage.getItem('token');
    if (!token) return;

    this.http.put('http://localhost:5000/api/auth/profile', this.form.value, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .subscribe({
      next: () => {
        console.log("✅ Requête envoyée !");
        this.message = "✅ Informations mises à jour !";
      },
      error: (err) => {
        console.error("❌ Erreur backend :", err);
        this.message = "❌ Erreur lors de la mise à jour.";
      }
    });
    
  }
}
