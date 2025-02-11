import { Component, numberAttribute } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
num1 = null;
num2 = null;
calc : number = 0;
result : string = "";

  constructor(private alertController: AlertController) {}
  

   async adicao(){
this.calc = Number(this.num1) + Number(this.num2);
  }
  multiplicacao(){
 this.calc = Number(this.num1) * Number(this.num2); 
  }
  async divisao(){

if(this.num1 == "0" || this.num2 == "0"){ 

  const alert = await this.alertController.create({
    header: 'Não fazemos divisão por zero',

    buttons: ['ok'],
  });

  await alert.present();
      }  
      else{
        this.calc = Number(this.num1) / Number(this.num2); 
      } 
  }

  substracao(){
 this.calc = Number(this.num1) - Number(this.num2);
  }
  async limpar(){
    this.result = "";
    this.num1 = null;
    this.num2 = null;
  }
  async resultado(){

    if(this.num1 == null || this.num2 == null ){
      const alert = await this.alertController.create({
        header: 'Por favor preencha TODOS os CAMPOS para serem calculados',
        buttons: ['ok'],
      });
    
      await alert.present();
          }
    else {
      const alert = await this.alertController.create({
        header: 'Resultado',
        message: String(this.calc) ,
        buttons: ['ok'],
      });
   
      await alert.present();
this.result = String (this.calc);
    }
  }


}

