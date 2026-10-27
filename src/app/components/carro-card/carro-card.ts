import { Component, input } from '@angular/core';
import { Carros } from '../../models/carros';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-carro-card',
  styleUrl: './carro-card.scss',
  templateUrl: './carro-card.html',
})
export class CarroCard {
  carro = input.required<Carros>();
}
