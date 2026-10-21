import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Carros } from '../../models/carros';

@Component({
  imports: [CommonModule],
  selector: 'app-carros-list',
  styleUrl: './carros-list.scss',
  templateUrl: './carros-list.html',
})
export class CarrosList {
  lista: Carros[] = []
  constructor() {
    let carro1: Carros = new Carros()
    carro1.id = 1;
    carro1.nome = "Focus"
    carro1.marca = "Ford"

    let carro2: Carros = new Carros()
    carro2.id = 2;
    carro2.nome = "Uno"
    carro2.marca = "Fiat"

    let carro3: Carros = new Carros()
    carro3.id = 3;
    carro3.nome = "Kwid"
    carro3.marca = "Renault"

    this.lista.push(carro1)
    this.lista.push(carro2)
    this.lista.push(carro3)

  }
}
