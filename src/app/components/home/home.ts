import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  diferenciais = [
    { icone: '🔍', titulo: 'Seleção criteriosa', texto: 'Cada veículo passa por uma avaliação antes de entrar no nosso estoque.' },
    { icone: '🤝', titulo: 'Atendimento transparente', texto: 'Informações claras sobre cada carro, sem letras miúdas.' },
    { icone: '💳', titulo: 'Condições facilitadas', texto: 'Opções de pagamento e financiamento que cabem no seu bolso.' },
  ];
}