import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  films = [];
  isLoading = true;

  constructor(private rmService: SwapiService) {}

  ngOnInit() {
    this.rmService.getData().subscribe((data: any) => {
      this.films = data.results;
      this.isLoading = false;
    });
  }

  // openModal et closeModal ouvrait à chaque fois la première modale donc les détails du premier film
  // openModal() {
  //   let dialog = document.querySelector('dialog');
  //   dialog!.showModal();
  // }

  // closeModal() {
  //   let dialog = document.querySelector('dialog');
  //   dialog!.close();
  // }

  openModal(id: string) {
    let dialog = document.getElementById(id);
    dialog!.style.display = 'block';
  }

  closeModal(id: string) {
    let dialog = document.getElementById(id);
    dialog!.style.display = 'none';
  }
}
