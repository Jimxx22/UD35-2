import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Output() enviarForm = new EventEmitter;
  form:any;

  op:string=''

  n1:number=0;
  n2:number=0;
  s:String='';
  errorNom:string='';
  errorMail:string='';
  errorMen:string='';
  errorVal:string='';

  constructor() { }

  ngOnInit(): void {
    this.opValidacion();
  }

  guardarForm(nombre:string, mail:string, mensaje:string, res:string){

    console.log(res);
    if (this.validarLleno(nombre, mail, mensaje, res)) {
      if (this.testName(nombre)) {
        if (this.testMail(mail)) {
          if(this.validarOP(res)){;
            this.errorVal='';
            console.log(nombre + mail + mensaje)
            this.form = {nombre: nombre, mail: mail, mensaje:mensaje};
            this.enviarForm.emit(this.form);
            this.opValidacion();
            // falta buidar els imputs del form
           }else{
             this.errorVal='La operacion es incorrecta.'
           }
        }
      }
    }
  }

  opValidacion(){
    this.n1= Math.trunc(Math.random()*10);
    this.n2= Math.trunc(Math.random()*10);
    if (Math.trunc(Math.random()*2)==1) {
      this.s='+';
    }else{
      this.s='-';
    }
    this.op=this.n1+''+this.s+this.n2+'=';
  }

  validarOP(resS:string){
      let res=parseFloat(resS);
      if (this.s=='+') {
        if (res==this.n1+this.n2) {
          return true;
        }else{
          return false;
        }
      }else{
        if (res==this.n1-this.n2) {
          return true;
        }else{
          return false;
        }
      }
  }

  validarLleno(nombre:string, mail:string, mensaje:string, res:string){

    let b:boolean=true;

    if (nombre=='') {
      this.errorNom='El campo nombre no puede estar vacio';
      b=false;
    }else{
      this.errorNom='';
    }
    if (mail=='') {
      this.errorMail='El campo e-mail no puede estar vacio';
      b=false;
    }else{
      this.errorMail='';
    }
    if (mensaje=='') {
      this.errorMen='El campo mensaje no puede estar vacio';
      b=false;
    }else{
      this.errorMen='';
    }
    if (res=='') {
      this.errorVal='El campo res no puede estar vacio';
      b=false;
    }else{
      this.errorVal='';
    }
    return b;
  }

  testName(name:string){
    let pattern:any =/([A-Z,a-z])+/g
    if (name.match(pattern)) {
      return true;
    }else{
      this.errorNom='El campo nombre solo puede contener letras';
      return false;
    }
  }

  testMail(mail:string){
    let pattern:any = /([a-z0-9_-])+@([a-z])+.[a-z]{1,4}/g
    if (mail.match(pattern)) {
      return true;
    }else{
      this.errorMail='El campo mail esta mal formado, este es el patron: [a-z, 0-9, -, _]@[a-z].[a-z]{1-4}';
      return false;
    }
  }
}
