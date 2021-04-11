import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alerta',
      subHeader: 'Mensaje de confirmacion',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Multiple',
      message: 'Este es un mensaje de alerta',
      buttons: [
        {
        text: 'Ok',
        handler: () => {
          console.log('Click en Ok');
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'rojo',
        handler: () => {
          console.log('Click en Cancelar');
        }
      }]

    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Formulario',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'Ramirez',
          placeholder: 'Apellido'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Descripcion'
        },
        {
          name: 'name3',
          type: 'url',
          placeholder: 'Linkedin'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number',
          placeholder: 'Edad'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Contraseña',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data: any ) => {
            console.log('Confirm Ok');
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }


}
