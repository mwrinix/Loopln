import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// Dummy modal component
@Component({
  selector: 'app-new-record-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Novo Registro</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">Fechar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>Conteúdo do novo registro aqui</p>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule],
})
export class NewRecordModal {
  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    NewRecordModal, // import the modal component here
  ],
})
export class HomePage {
  constructor(private modalCtrl: ModalController) {}

  async openNewRecordModal() {
    const modal = await this.modalCtrl.create({
      component: NewRecordModal,
    });
    await modal.present();
  }
}
