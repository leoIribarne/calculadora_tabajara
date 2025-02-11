import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  calc : number = 0;
visor : string = "";
visor2 : string = "";
multi : boolean = false;
divi : boolean = false;
adic : boolean = false;
subs : boolean = false;
porc : boolean = false;
mod : boolean = false;
cal : any;
virgulas : Boolean= false ;

  constructor(private alertController: AlertController) {}
numero(valor : any = "0"){
this.visor += valor;

}
limpar(){
this.visor= "";
this.visor2 ="";
this.calc =  0 ; 
this.cal = 0;
this.virgulas = false;
}
multiplicacao(){
  if(this.visor2 == ""){
    this.calc = Number(this.visor)
    this.visor2 += Number(this.visor)
    this.visor2 += " x"
    this.visor= "";
  }
  this.multi = true;
  this.divi = false;
  this.adic = false;
  this.subs = false;
  this.porc = false;
  this.mod  = false;
}
async divisao(){
  if(this.visor2 == ""){
    this.calc = Number(this.visor)
    this.visor2 += Number(this.visor)
    this.visor2 += "÷"
    this.visor= "";
  }
  
  this.multi = false;
  this.divi = true;
  this.adic = false;
  this.subs = false;
  this.porc = false;
  this.mod  = false;
}
adicao(){
  if(this.visor2 == ""){
    this.calc = Number(this.visor)
    this.visor2 += Number(this.visor)
    this.visor2 += " +"
    this.visor= "";
  }
  this.multi = false;
  this.divi = false;
  this.adic = true;
  this.subs = false;
  this.porc = false;
  this.mod  = false;
}
substracao(){
  if(this.visor2 == ""){
    this.calc = Number(this.visor)
    this.visor2 += Number(this.visor)
    this.visor2 += " -"
    this.visor= "";
  }
  this.multi = false;
  this.divi = false;
  this.adic = false;
  this.subs = true;
  this.porc = false;
  this.mod  = false;
}
async resultado(){
  

  // operação de adição
if(this.visor== "" && this.visor2 =="" && this.calc ==  0  && this.cal == 0){
  const alert = await this.alertController.create({
    header: 'Preencha todos os campos',

    buttons: ['ok'],
  });
await alert.present();
}
 
    

if(this.adic == true){ 
  this.visor2 += "  " + this.visor;
this.calc = Number(this.visor) + this.calc;
this.visor = String(this.calc);
}
// operação de substração
else if (this.subs == true){
  this.visor2 += "  " + this.visor;
  this.calc = this.calc - Number(this.visor);
  this.visor = String(this.calc);
}
else if (this.multi == true){
  this.visor2 += "  " + this.visor;
  this.calc = Number(this.visor) * this.calc;
  this.visor = String(this.calc);
}
else if (this.divi == true){
  if(this.visor == "0") { 

    const alert = await this.alertController.create({
      header: 'Não fazemos divisão por zero',
  
      buttons: ['ok'],
    });
  await alert.present();
  }
  else{
  this.visor2 += "  " + this.visor;
  this.calc = this.calc / Number(this.visor);
  this.visor = String(this.calc);
  }
}
else if (this.porc == true){
  this.visor2 += "  " + this.visor;
  this.calc = (this.calc) * Number(this.visor) / 100;
  this.visor = String(this.calc) ;
}




}
modulo(){
    this.cal= Number(this.visor)* -1;
    this.visor = String(this.cal);
}
porcentagem(){
  if(this.visor2 == ""){
    this.calc = Number(this.visor)
    this.visor2 += Number(this.visor)
    this.visor2 += "%"
    this.visor= "";
  }
  this.multi = false;
  this.divi = false;
  this.adic = false;
  this.subs = false;
  this.porc = true;
  this.mod  = false;
}
virgula(){
  if(this.virgulas == false){
    this.visor += ".";
    this.virgulas = true;
  }
}

}
