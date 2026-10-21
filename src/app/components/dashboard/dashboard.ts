import { Component } from '@angular/core';
import { CarrosList } from '../carros-list/carros-list';

@Component({
  imports: [CarrosList],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
