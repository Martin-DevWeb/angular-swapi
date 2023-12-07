import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SwapiService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('https://swapi.dev/api/films/');
  }

  // Création d'une route pour afficher un film en particulier, comme une page détails
  getFilmData(id: number) {
    return this.httpClient.get(`https://swapi.dev/api/films/${id}/`);
  }
}
