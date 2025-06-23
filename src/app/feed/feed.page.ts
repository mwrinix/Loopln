import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para diretivas como ngIf, ngFor
import { FormsModule } from '@angular/forms'; // Necessário se você usar formulários no seu HTML
import { IonicModule } from '@ionic/angular'; // Módulos Ionic para componentes UI
import { ActivatedRoute } from '@angular/router'; // Para obter parâmetros da URL, como id e name

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: true, // Importante! Indica que este componente é standalone
  imports: [IonicModule, CommonModule, FormsModule] // Importa os módulos necessários diretamente
})
export class FeedPage implements OnInit {
  challengeId: string | null = null;
  challengeName: string | null = null;

  // Exemplo de dados para posts (você pode carregar isso de um serviço real depois)
  feedPosts = [
    { text: 'Estou me dedicando aos meus desafios de saúde!', user: 'Você', date: '2023-10-26T10:00:00Z' },
    { text: 'Dia 3 do desafio "30 Dias de Yoga".', user: 'Você', date: '2023-10-25T09:30:00Z' },
    // Mais posts aqui
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obter parâmetros da URL, se existirem (para a rota feed/:id/:name)
    this.route.paramMap.subscribe(params => {
      this.challengeId = params.get('id');
      this.challengeName = params.get('name');
      console.log('ID do Desafio:', this.challengeId);
      console.log('Nome do Desafio:', this.challengeName);
      // Se tiver um ID/nome de desafio, você pode filtrar os posts ou carregar dados específicos
    });
  }

  // Você pode adicionar métodos aqui para carregar mais posts, interagir com eles, etc.
}