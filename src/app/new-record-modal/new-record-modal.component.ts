import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-record-modal',
  templateUrl: './new-record-modal.component.html',
  styleUrls: ['./new-record-modal.component.scss'],
  standalone: true,
})
export class NewRecordModalComponent  implements OnInit {

 constructor(
  private modalController: ModalController,
  private alertController: AlertController,
) {}

async createNewChallenge() {
  console.log('Criar Novo Desafio clicado!');
  const alert = await this.alertController.create({ 
    header: 'Novo Desafio',
    message: 'Funcionalidade "Criar Novo Desafio" ainda não implementada.',
    buttons: ['OK']
  });
  await alert.present();
}
saveRecord() {

}

async closeModal() {
    await this.modalController.dismiss(null, 'cancel');
  }
  
  ngOnInit() {}

}
