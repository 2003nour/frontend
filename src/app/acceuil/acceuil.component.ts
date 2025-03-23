import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AccueilComponent implements OnInit {
  messages: { nom: string; message: string }[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/api/user/messages').subscribe({
      next: (data) => {
        this.messages = data;
      },
      error: (err) => {
        console.error('❌ Erreur de chargement des messages :', err);
      }
    });
  }

  commencer() {
    this.router.navigate(['/inscription']);
  }
}
