import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35-2';

  nombre:string='';
  mail:string='';
  mensaje:string='';

  mostratForm(form:any){
    this.nombre=form.nombre;
    this.mail=form.mail;
    this.mensaje=form.mensaje;
  }
;}
