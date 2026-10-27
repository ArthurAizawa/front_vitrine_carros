import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Carros } from '../../models/carros';
import { CarroCard } from '../carro-card/carro-card';
import { CarrosService } from '../../services/CarroService';

@Component({
  selector: 'app-carros-list',
  imports: [CarroCard],
  styleUrl: './carros-list.scss',
  templateUrl: './carros-list.html',
})
export class CarrosList implements OnInit {
  private service = inject(CarrosService);

  list = signal<Carros[]>([]);
  busca = signal('');
  carregando = signal(true);
  erro = signal(false);

  filtrados = computed(() => {
    const termo = this.busca().trim().toLowerCase();
    if (!termo) return this.list();
    return this.list().filter(
      (c) =>
        c.nome.toLowerCase().includes(termo) ||
        c.marca.toLowerCase().includes(termo)
    );
  });

  ngOnInit() {
    this.service.listar().subscribe({
      next: (dados) => {
        this.list.set(dados);
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set(true);
        this.carregando.set(false);
      },
    });
  }

  atualizarBusca(event: Event) {
    this.busca.set((event.target as HTMLInputElement).value);
  }
}