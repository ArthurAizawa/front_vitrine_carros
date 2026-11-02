import { Component, input } from '@angular/core';
import { Carros } from '../../models/carros';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [CurrencyPipe, MatCardModule, MatButtonModule],
  selector: 'app-carro-card',
  styleUrl: './carro-card.scss',
  templateUrl: './carro-card.html',
})
export class CarroCard {
  carro = input.required<Carros>();
}
